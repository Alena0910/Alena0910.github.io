# 計算機網路課程筆記

[Cisco Networking Academy - CCNA: Introduction to Networks](https://www.netacad.com/launch?id=c106ef38-c5a1-4a13-93d0-2bb0789830c1&tab=curriculum&view=5e4bec40-8539-5df2-9aff-185093f492ca)

## 總整理

### L2

- `enable` 進到特權模式(Privileged EXEC Mode)
- `configure terminal` 進入全域配置模式（Global Configuration Mode）
- `hostname` 改 switch 的名稱
- 在全域配置模式用`line console 0`進入 Switch 的 Console 端口配置模式。
- `password`用於設置 Console 端口的密碼
- `login` 指令啟用密碼驗證功能。
- 在全域配置模式用 `enable secret 6EBUp` 設置進入特權模式所需的密碼
- `service password-encryption `啟用密碼加密功能
- `banner motd "msg"` Switch 上設置 Message of the Day (MOTD) 標語
- `interface vlan 1` 告訴 Switch 進入 VLAN 1 的介面設定模式
- `ip address` 設定 IP 位址和子網路遮罩
- `no shutdown`啟用 VLAN 介面
- `copy running-config startup-config`將配置儲存到啟動配置

### L3
