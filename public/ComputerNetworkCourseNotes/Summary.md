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

### L4

#### 1. 實體層的目的 (Purpose of the Physical Layer)

- 負責將數據轉換為電信號、光信號或無線訊號，並透過媒介傳輸。
- 接收數據鏈路層 (Data Link Layer) 的幀 (Frame)，將其編碼並發送到媒介。
- 封裝 (Encapsulation) 最後一步，確保數據能正確傳輸至下一個設備。

#### 2. 實體層特性 (Physical Layer Characteristics)

- 物理元件 (Physical Components)：如網路介面卡 (NIC)、纜線等。
- 編碼 (Encoding)：將 0 和 1 轉換為可傳輸的訊號格式（如曼徹斯特編碼）。
- 信號處理 (Signaling)：電信號（銅纜）、光信號（光纖）、微波信號（無線）。

#### 3. 編碼技術 (Encoding Techniques)

- 曼徹斯特編碼 (Manchester Encoding)：訊號在位元中間翻轉，確保同步。
- 4B/5B、8B/10B 編碼：加入額外控制比特，增強錯誤檢測與同步。

#### 4. 頻寬與效能 (Bandwidth & Performance)

- 頻寬 (Bandwidth)：bps, Kbps, Mbps, Gbps, Tbps。
- 延遲 (Latency)：數據從發送到接收的時間。
- Throughput：實際傳輸量。
- Goodput：有效數據傳輸量 (`Goodput = Throughput − Traffic Overhead`)。

#### 5. 銅纜 (Copper Cabling)

- 優點：成本低、易於安裝。
- 缺點：
  - 衰減 (Attenuation)：距離過長信號變弱。
  - 干擾 (Interference)：EMI、RFI、串擾 (Crosstalk)。
- 應對方式：
  - 遵守長度限制、屏蔽、使用雙絞線 (Twisted Pair)。

#### 6. UTP (無屏蔽雙絞線, Unshielded Twisted Pair)

- 常見於 LAN 網路，使用 RJ-45 端子。
- 結構：
  - 外層護套：保護纜線。
  - 雙絞線：減少干擾。
  - 顏色編碼的絕緣層：便於辨識。

#### 7. 光纖 (Fiber-Optic Cabling)

- 優點：
  - 高速傳輸，適合長距離與高頻寬應用。
  - 不受 EMI、RFI 影響。
  - 衰減低，信號不易弱化。
- 缺點：
  - 成本較高，不如 UTP 普及。
