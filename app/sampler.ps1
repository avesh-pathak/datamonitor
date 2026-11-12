$ErrorActionPreference = 'SilentlyContinue'

# Pick the adapter that actually carries traffic, and re-resolve it every tick so a
# Wi-Fi reset or reconnect cannot leave the sampler stuck on an idle adapter.
function Get-ActiveAdapter {
    $candidates = [System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() |
        Where-Object {
            $_.OperationalStatus -eq 'Up' -and
            $_.NetworkInterfaceType -ne 'Loopback' -and
            $_.NetworkInterfaceType -ne 'Tunnel'
        }

    # The interface with an IP default gateway is the one carrying internet traffic.
    $gateway = $candidates |
        Where-Object { $_.GetIPProperties().GatewayAddresses.Count -gt 0 } |
        Sort-Object Speed -Descending |
        Select-Object -First 1

    if ($gateway) { return $gateway.Name }

    # No gateway: fall back to a physical adapter, never a Hyper-V/WSL/VPN one.
    $physical = @(Get-NetAdapter -Physical | Where-Object { $_.Status -eq 'Up' } | ForEach-Object { $_.Name })
    return $candidates |
        Where-Object { $physical -contains $_.Name } |
        Sort-Object Speed -Descending |
        Select-Object -First 1 |
        ForEach-Object { $_.Name }
}

while ($true) {
    $name = Get-ActiveAdapter
    $stats = if ($name) { Get-NetAdapterStatistics -Name $name } else { $null }

    if ($stats) {
        $ms = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
        Write-Output ("{0} {1} {2}" -f $ms, $stats.ReceivedBytes, $stats.SentBytes)
    }

    Start-Sleep -Milliseconds 1000
}
