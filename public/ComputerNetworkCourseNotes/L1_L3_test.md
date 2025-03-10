# Checkpoint Exam: Basic Network Connectivity and Communications Exam

> ## Match the requirements of a reliable network with the supporting network architecture.  
> ![q1](/ComputerNetworkCourseNotes/assets/L1_L3_tests/image.png)  
> ### 網路架構的需求  
> #### Fault tolerance 故障容錯  
> 在網路發生故障時仍能保持運作，避免整體服務中斷  
> 所以應選`Provide redundant links and devices.(提供冗餘鏈路和設備)`  
> #### Scalability 可擴展性  
> 網路能隨需求增長進行擴展，不影響到現有用戶的服務品質  
> 應選`Expand the network without degrading the service for existing users.(在不降低現有用戶服務的情況下擴展網路)`  
> #### Security 安全性
> 保護網路免於未授權的訪問、攻擊或數據洩漏。
> 應選`Protect the network from unauthorized access.(保護網路免受未授權訪問)`

> ## Which statement describes the use of powerline networking technology?  
> 電力線網路技術（Powerline Networking）利用家庭中的現有電力插座來傳輸數據，使用專門的適配器將設備連接到現有的家庭網路，不需要額外的物理網路纜線  
> 1. `A home LAN is installed without the use of physical cabling.`
> 無線網路（Wi-Fi）或某些不需要物理線纜的技術  
> 2. `A device connects to an existing home LAN using an adapter and an existing electrical outlet.`  
> 選項正確描述了 電力線網路技術 的運作方式  
> 3. `New "smart" electrical cabling is used to extend an existing home LAN.`  
> 使用新型的「智能」電纜來擴展網路
> 4. `Wireless access points use powerline adapters to distribute data through the home LAN.`
> 無線接入點（AP）可以通過電力線適配器來分發數據，但這並不是電力線網路技術的核心描述，電力線網路技術不是專門用來分發無線信號
> ---
> 應選`A device connects to an existing home LAN using an adapter and an existing electrical outlet.`


> ## An employee at a branch office is creating a quote for a customer. In order to do this, the employee needs to **access confidential pricing information from internal servers** at the Head Office. What type of network would the employee access?
> 1. `A local area network (LAN)` 本地區網路（LAN）通常是指在同一個物理區域內（如同一棟建築物或辦公室內）建立的網路。這意味著，如果員工在同一辦公地點工作，會使用到LAN。然而，這個選項並不符合題目中提到的“分公司”場景，因此不正確。
> 2. `An extranet` 外部網路（Extranet）是一種連接外部用戶（如合作夥伴或客戶）與內部網路的方式
> 3. `The Internet` 互聯網是一個全球性網路，用來提供各種公共服務
> 4. `An intranet` 內部網路（Intranet）是指公司內部使用的私有網路，員工無論身在何處，只要連接到公司內部網路，就可以訪問內部的資料和伺服器
> ---
> 應選`The Internet`

> ## What are two characteristics of RAM on a Cisco device? (Choose two.)
> 1. `The contents of RAM are lost during a power cycle.`RAM（隨機存取記憶體）是易失性的，這意味著當設備斷電或重新啟動時，RAM 中的資料會被清除
> 2. `The configuration that is actively running on the device is stored in RAM.`設備正在運行的配置（例如路由器或交換機的運行配置）通常存儲在 RAM 中。當設備啟動並加載 IOS（操作系統）時，當前運行的配置會存在 RAM 中
> 3. `RAM provides nonvolatile storage.`RAM 是易失性記憶體，這意味著它不提供非揮發性存儲。非揮發性存儲通常指的是像 ROM、NVRAM 或硬碟這類在斷電後仍能保持資料的存儲裝置
> 4. `RAM is able to store multiple versions of IOS and configuration files.`RAM 是用來存儲運行中配置和資料的，但它不會存儲多個版本的 IOS 或配置檔案
> 5. `RAM is a component in Cisco switches but not in Cisco routers.`
> ---
> 應選`The contents of RAM are lost during a power cycle.`、`The configuration that is actively running on the device is stored in RAM.`

> ## An administrator uses the Ctrl-Shift-6 key combination on a switch after issuing the ping command. What is the purpose of using these keystrokes?
> `to interrupt the ping process`立即中斷當前的 ping 操作，而不需要等它發送完所有封包

> ## Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)
> 1. `VTY interface（虛擬終端 VTY 介面）`用來處理遠端存取（如 Telnet 或 SSH） 的虛擬終端介面
> ```sh  
> Router(config)# line vty 0 4
> Router(config-line)# password mypassword
> Router(config-line)# login
> ```
> 2. `Boot IOS mode（啟動 IOS 模式）`設備啟動時，若找不到正確的 IOS 映像檔案時進入的模式
> 3. `Privileged EXEC mode（特權 EXEC 模式）`擁有完整控制權的模式，能夠執行所有管理命令（例如 show running-config 或 reload）
> ```sh  
> Router(config)# enable secret mysecretpassword
> ```
> 4. `Ethernet interface（乙太網路介面）`本身不會直接受到密碼保護
> 5. `Router configuration mode（路由器配置模式）`不是一個獨立的存取介面，而是 CLI 的一部分
> 6. `Console interface（主控台介面）`Console 介面（透過序列連線存取設備）也可以設置密碼
> ```sh
> Router(config)# line console 0
> Router(config-line)# password myconsolepassword
> Router(config-line)# login
> ```
> ---
> 應選`VTY interface`、`Privileged EXEC mode`、` Console interface`

> ## A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?  
> `service password-encryption` 主要是對 明文顯示的密碼 進行 基本的加密，防止未經授權的使用者直接在 show running-config 或 show startup-config 指令中查看密碼  
> 若想讓加密生效於 startup-config（NVRAM），需手動 `copy running-config startup-config`
> ---
> 應選`This command prevents someone from viewing the running configuration passwords.`

> ## Which interface allows remote management of a Layer 2 switch?
> Layer 2 交換機 本身不具備 IP 位址，它主要處理 MAC 位址層面的封包轉發，不像路由器那樣有 IP 介面。  
> 如果要遠端管理交換機（例如透過 SSH 或 Telnet），就需要設定一個 可管理的 IP 位址，這就是 Switch Virtual Interface（SVI）
> 1. `The first Ethernet port interface`Layer 2 交換機的 Ethernet 介面 主要用來連接電腦、其他交換機或路由器，並不會綁定 IP 位址來做管理
> 2. `The switch virtual interface (SVI)`SVI（Switch Virtual Interface） 是 Layer 2 交換機上的 虛擬介面，它允許管理員 設定 IP 位址，讓設備可以透過網路進行管理（如 SSH、Telnet 或 HTTP）
> 3. `The AUX interface`AUX 介面（輔助埠） 通常存在於 路由器上，是為了讓管理員可以透過 撥號（Modem）或序列連接 來存取設備
> 4. `The console port interface`Console 介面 是本地管理介面，需透過 Console 線（RJ-45 或 USB） 直接連接到電腦，不適用於遠端管理
> ---
> 應選`The switch virtual interface (SVI)`

> ## After making configuration changes on a Cisco switch, a network administrator issues a copy running-config startup-config command. What is the result of issuing this command?
> Cisco 交換機或路由器中，有兩種主要的設定儲存區
> 1. Running Configuration（執行中的設定）
>   - 儲存在 RAM（揮發性記憶體） 中
>   - 當設備重新啟動時，這些設定會消失
>   - 透過 show running-config 可查看目前的設定
> 2. Startup Configuration（開機設定）
>   - 儲存在 NVRAM（非揮發性記憶體） 中
>   - 即使設備重新啟動，設定仍會保留
>   - 透過 show startup-config 可查看開機時會載入的設定
> ---
> 應選`The new configuration will be loaded if the switch is restarted.`

> ## What command is used to verify the condition of the switch interfaces, including the status of the interfaces and a configured IP address?
> 如何檢查 Cisco 交換機的介面狀態和 IP 設定
> ---
> 應選`show ip interface brief`

> ## What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?
> ---
> 應選`(config)# service password-encryption`

> ## What are three characteristics of an SVI? (Choose three.)
> - SVI 是 虛擬介面，不與交換機上的任何實體介面相關聯
> - Cisco 交換機 預設 會將 SVI 綁定到 VLAN1，因為 VLAN1 是交換機的 管理 VLAN
> - SVI 主要用途之一是 讓管理員可以透過 IP 連線到交換機，例如使用 SSH 或 Telnet 進行遠端管理
> ---
> 應選`It is not associated with any physical interface on a switch.`、`It is associated with VLAN1 by default.`、`It provides a means to remotely manage a switch.`

> ## What function does pressing the Tab key have when entering a command in IOS?
> It completes the remainder of a partially typed word in a command.（它會自動補完指令的剩餘部分）

> ##  Which command or key combination allows a user to return to the previous level in the command hierarchy?
> "Exit" 指令可讓使用者回到上一層指令模式

> ## Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses a console connection to connect to the switch, which password is needed to access user EXEC mode?
> ![q15](/ComputerNetworkCourseNotes/assets/L1_L3_test/image.png)
> ---
> 應選`lineconin`

> ## A technician configures a switch with these commands:
> ```sh
> SwitchA(config)# interface vlan 1
> SwitchA(config-if)# ip address 192.168.1.1 255.255.255.0
> SwitchA(config-if)# no shutdown
> ```
> What is the technician configuring?
> ---
> 應選`SVI`

> ## Which PDU format is used when bits are received from the network medium by the NIC of a host?
> 當網路介面卡（NIC）從網路媒介接收位元（bits）時，這些數據是以「Frame（幀）」的格式處理的。
> ### PDU（Protocol Data Unit）格式簡介
> PDU 是指在不同的 OSI（開放式系統互連模型）層級中傳輸的數據格式
> |OSI 層級|PDU 名稱|功能|
> |-------|--------|---|
> |應用層、表示層、會話層|資料（Data）|傳輸應用程式的數據|
> |傳輸層|Segment（段）|將數據分割成較小的單元並加上端口號|
> |網路層|Packet（封包）|添加 IP 位址來決定路由|
> |資料鏈結層|Frame（幀）|添加 MAC 位址，用於網路內部傳輸|
> |實體層|Bits（位元）|以 0 和 1 形式傳輸數據|
> ---
> 應選`frame`

> ## A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?
> 從客戶端（Client）的角度來看，收到來自 Web 伺服器的回應時，解碼數據的順序應該從 OSI 模型的底層（Layer 1）開始，逐步向上解析數據
> 1. 伺服器發送數據（封裝順序）
> - 應用層：HTTP （封裝成 HTTP 數據）
> - 傳輸層：TCP （加入 TCP 標頭）
> - 網路層：IP （加入 IP 標頭）
> - 資料鏈結層：Ethernet （加入 MAC 地址等資訊）
> - 物理層：透過 0 和 1 傳輸數據
> 2. 客戶端接收數據（解封裝順序）
> 解析順序應該相反，從底層往上解析：
> - Ethernet（乙太網路）：解析 MAC 位址，確認數據應該傳遞給 NIC（網路介面卡）。
> - IP（網際網路協定）：解析 IP 地址，確認數據應該傳送到本機。
> - TCP（傳輸控制協定）：解析 TCP 端口，確認數據應該傳送給哪個應用程式（如 Web 瀏覽器）。
> - HTTP（超文本傳輸協定）：最終將數據交給瀏覽器，顯示網頁內容。
> ---
> 應選`Ethernet, IP, TCP, HTTP`

> ## Which statement is correct about network protocols?
> 網路協定標準化了數據交換的方式，確保不同設備能夠理解彼此傳送的訊息
> ---
> 應選`They define how messages are exchanged between the source and the destination.`

> ## At which layer of the OSI model would a logical address be added during encapsulation? 
> 在 OSI 模型中，邏輯位址（Logical Address） 主要指 IP 位址，這是在 網路層（Network Layer） 進行封裝時添加的  
> 1️. 應用層（Application Layer） – 產生數據（Data）  
> 2️. 傳輸層（Transport Layer） – 加入 TCP/UDP 標頭（Port 號）  
> 3️. 網路層（Network Layer） – 加入 IP 位址（Logical Address）  
> 4️. 資料鏈結層（Data Link Layer） – 加入 MAC 位址（Physical Address）  
> 5️. 實體層（Physical Layer） – 將數據轉為電訊號或光訊號  
> ---
> 應選`network layer`

> ## Which two OSI model layers have the same functionality as a single layer of the TCP/IP model?  (Choose two.)
> 在 OSI 模型 和 TCP/IP 模型 中，有些層的功能是相同的  
> 1. OSI 模型的實體層（Physical Layer） 和 TCP/IP 模型的網路接入層（Network Access Layer）
> 2. OSI 模型的資料鏈結層（Data Link Layer） 和 TCP/IP 模型的網路接入層（Network Access Layer）
> ---
> 應選`physical`、`data link`

> ## What layer is responsible for routing messages through an internetwork in the TCP/IP model?
> 應選`internet`

> ## Which name is assigned to the transport layer PDU?
> 應選`segment`

> ## What process involves placing one PDU inside of another PDU?
> 應選`encapsulation`

> ## When IPv4 addressing is manually configured on a web server, which property of the IPv4 configuration identifies the network and host portion for an IPv4 address?  
> 子網掩碼（Subnet Mask） 用來識別 IPv4 位址中的 網路部分 和 主機部分
> 對於 IP 位址 192.168.1.10 和子網掩碼 255.255.255.0，子網掩碼的 255.255.255 表示前 24 位是網路位址，最後 8 位是主機位址
> ---
> 應選`Subnet mask`

> ## What three application layer protocols are part of the TCP/IP protocol suite? (Choose three.)
> 1. DHCP (Dynamic Host Configuration Protocol) 用於自動分配 IP 位址給網路上的設備  
> 2. FTP (File Transfer Protocol) 用來在計算機之間傳送檔案
> 3. DNS (Domain Name System) 負責將域名解析為 IP 位址
> ---
> 應選`DHCP`、`FTP`、`DNS`

> ## Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements  correctly identify the addressing that ServerB will generate in the process? (Choose two.)
> ![q27](/ComputerNetworkCourseNotes/assets/L1_L3_test/image-1.png)  
> ServerB 正在嘗試聯繫 HostA  
> ServerB 通過 RouterB 與 RouterA 進行通信，RouterA 再通過 SwitchA 連接到 HostA  
> ---
> - ServerB 必須將其數據包的目標 IP 地址設置為 HostA 的 IP 地址，這樣數據包才能最終到達 HostA  
> - ServerB 通常不知道 RouterA 的 MAC 地址，因此它會將數據包送到 RouterB，並且 RouterB 會進一步處理數據包。在這種情況下，ServerB 會生成一個 frame，它的目標 MAC 地址是 RouterA，因為 ServerB 需要將數據傳送給 RouterA，而這是通過交換機完成的  
> ---
> 應選`ServerB will generate a packet with the destination IP address of HostA.`、`ServerB will generate a frame with the destination MAC address of RouterA.`

> ## Why would a Layer 2 switch need an IP address?
> Layer 2 Switch 需要 IP 地址來進行 遠端管理
> ---
> 應選`to enable the switch to be managed remotely`

> ## Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?
> ![q29](/ComputerNetworkCourseNotes/assets/L1_L3_test/image-2.png)
> 要進入全域配置模式，管理員必須先進入 特權執行模式 (privileged EXEC mode)，通常是輸入 enable 命令來進入此模式，然後才可以進入配置模式。  
> 錯誤訊息可能是因為管理員直接在普通模式下嘗試配置交換機，而沒有先進入特權執行模式。
> ---
> 應選`The administrator must first enter privileged EXEC mode before issuing the command.`

> ## Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.What is the IP address of the switch virtual interface (SVI) on Switch0?
> ![PT Activity](/ComputerNetworkCourseNotes/assets/L1_L3_test/image-3.png)
> `show ip interface brief`會顯示交換機或路由器所有接口的簡要狀態，包含接口名稱、IP 地址、子網掩碼、狀態以及協議的狀態
> ---
> 應選`192.168.5.10`

```sh
LocalSw01#show ip interface brief 
Interface              IP-Address      OK? Method Status                Protocol 
FastEthernet0/1        unassigned      YES manual up                    up 
FastEthernet0/2        unassigned      YES manual down                  down 
FastEthernet0/3        unassigned      YES manual down                  down 
FastEthernet0/4        unassigned      YES manual down                  down 
FastEthernet0/5        unassigned      YES manual down                  down 
FastEthernet0/6        unassigned      YES manual down                  down 
FastEthernet0/7        unassigned      YES manual down                  down 
FastEthernet0/8        unassigned      YES manual down                  down 
FastEthernet0/9        unassigned      YES manual down                  down 
FastEthernet0/10       unassigned      YES manual down                  down 
FastEthernet0/11       unassigned      YES manual down                  down 
FastEthernet0/12       unassigned      YES manual down                  down 
FastEthernet0/13       unassigned      YES manual down                  down 
FastEthernet0/14       unassigned      YES manual down                  down 
FastEthernet0/15       unassigned      YES manual down                  down 
FastEthernet0/16       unassigned      YES manual down                  down 
FastEthernet0/17       unassigned      YES manual down                  down 
FastEthernet0/18       unassigned      YES manual down                  down 
FastEthernet0/19       unassigned      YES manual down                  down 
FastEthernet0/20       unassigned      YES manual down                  down 
FastEthernet0/21       unassigned      YES manual down                  down 
FastEthernet0/22       unassigned      YES manual down                  down 
FastEthernet0/23       unassigned      YES manual down                  down 
FastEthernet0/24       unassigned      YES manual down                  down 
GigabitEthernet0/1     unassigned      YES manual down                  down 
GigabitEthernet0/2     unassigned      YES manual down                  down 
Vlan1                  192.168.5.10    YES manual up                    up
```

> ## Which device performs the function of determining the path that messages should take through internetworks?
> router (路由器) 才是執行決定訊息在網路中應該走的路徑的裝置
> 1. IP 路由選擇：
> 路由器會查看收到的資料包中的目標 IP 地址，並根據它自己的路由表來決定資料包應該發送到哪一個接口。路由表中記錄了從該路由器到各個網段的最短路徑。
> 2. 路由協議：
> 路由器通常會使用不同的路由協議（如 RIP、OSPF、BGP）來獲取和更新路由信息，並持續監控網路變化以選擇最佳路徑。
> 3. 跨網段通信：
> 在許多情況下，當設備（如主機或其他路由器）需要與不同網段的設備進行通信時，資料包會通過路由器進行轉發，實現跨網段的資料傳輸。
> ---
> - DSL 調製解調器 (DSL Modem)：
> DSL 調製解調器的功能主要是將數據從家庭或辦公室網絡轉換到 ISP（網際網路服務提供商）提供的 DSL 連接中。它不是用來決定數據路徑的設備。
> - Web 伺服器 (Web Server)：
> Web 伺服器是用來處理和提供網站內容的設備，它只負責根據用戶的請求提供相應的網頁。它不涉及路由或決定資料包的路徑。
> - 防火牆 (Firewall)：
> 防火牆的功能是根據預定的安全規則來過濾進出網絡的流量。它可以決定哪些流量可以通過，但它並不負責確定資料包的路徑。
> ---
> 應選`a router`

> ## What term describes a technology that allows devices to connect to the LAN using an electrical outlet?
> Powerline networking (電力線網絡) 是一種技術，它利用現有的電力線來實現設備與局域網的連接
> ---
> 應選`powerline networking`

> ## At which OSI layer is a destination MAC address added to a PDU during the encapsulation process?
> 在OSI模型中，目的地 MAC 地址是在數據鏈路層 (Data Link Layer) 被加入到 PDU（協議數據單元）中的
> ---
> 應選`data link layer`

> ## An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered?
> ![ans](/ComputerNetworkCourseNotes/assets/L1_L3_test/image-4.png)
> ---
> 1. User EXEC mode
> 2. Privileged EXEC mode
> 3. Global Configuration mode
> 4. Line Configuration mode

> ## While trying to solve a network issue, a technician made multiple changes to the current router configuration file. The changes did not solve the problem and were not saved. What action can the technician take to discard the changes and work with the file in NVRAM?
> 如果技術員想要丟棄運行配置中的更改並恢復到 NVRAM 中的原始配置（startup-config），可以執行 reload 命令
> ---
> 應選`Issue the reload command without saving the running configuration`

> ## How is SSH different from Telnet?
> SSH（安全外殼協議）與 Telnet 的最大區別之一是 加密。SSH 提供加密保護，保證傳輸的數據是安全的，並且使用用戶身份驗證來加強安全性。相反，Telnet 會將所有傳輸的數據（包括登錄憑證）以 明文 形式發送，因此被認為是不安全的
> ---
> 應選`SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure and sends messages in plaintext.`

> ## Which two host names follow the guidelines for naming conventions on Cisco IOS devices? (Choose two.)
> Cisco IOS 裝置的主機名稱（hostname）命名規範
> 1. 不能包含特殊字符（例如 !, #, &, @ 等）
> 2. 由字母、數字和連字符（-）組成
> 3. 長度不能超過 63 個字符
> 4. 不能包含空格
> ---
> 應選`SwBranch799`、`RM-3-Switch-2A4`

> ## Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?
> 在 TCP/IP 封裝過程中，網際層（Internet Layer） 會將數據封裝成數據包，然後將其傳遞到網絡接入層（Network Access Layer），被封裝成幀並發送到物理網絡中
> ---
> 應選`Data is sent from the internet layer to the network access layer.`

> ## Which method allows a computer to react accordingly when it requests data from a server and the server takes too long to respond?
> 回應超時（Response Timeout）是一種在請求數據後，如果伺服器長時間未回應時，計算機會根據設定的超時時間做出反應的機制
> ---
> 應選`Response timeout`

> ## What is a characteristic of multicast messages?
> 多播（Multicast）消息是發送到一組特定的主機，而不是所有主機
> ---
> 應選`They are sent to a select group of hosts.`

> ## What term describes a type of network used by people who work from home or from a small remote office?
> 1. Converged network  
> 指將語音、數據和視頻等多種服務合併在同一網路上來傳輸  
> 2. SOHO network  
> 專為小型辦公室或家庭辦公室設計的網路  
> 3. Quality of service (QoS)  
> 在網路中管理流量的技術，用於確保不同類型的流量（例如，視頻、語音和數據）得到不同的處理優先級  
> 4. BYOD (Bring Your Own Device)  
> 員工將自己擁有的設備（如筆記型電腦、智能手機等）帶到工作場所使用的政策
> ---
> 應選`SOHO network`

> ## At which OSI layer is a source IP address added to a PDU during the encapsulation process?
> 應選`Network layer`