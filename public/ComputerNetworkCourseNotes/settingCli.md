#

## 基本路由器設定步驟

```sh
Router(config)# hostname
Router(config)# enable secret password
Router(config)# line console 0
Router(config-line)# password password
Router(config-line)# login
Router(config-line)# line vty 0 4
Router(config-line)# password   password
Router(config-line)# login
Router(config-line)# transport input {    ssh   | telnet}
Router(config-line)# exit
Router(config)# service password-encryption
Router(config)# banner motd delimiter message delimiter
Router(config)# end
Router# copy running-config startup-config
```
