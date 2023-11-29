function FindProxyForURL(url, host) {
    if (host == "proxy") {
        return "DIRECT";
    } else {
        return "PROXY http://proxy:3128";
    }
}
