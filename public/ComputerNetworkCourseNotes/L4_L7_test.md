# 計算機網路課程筆記

[Cisco Networking Academy - CCNA: Introduction to Networks](https://www.netacad.com/launch?id=c106ef38-c5a1-4a13-93d0-2bb0789830c1&tab=curriculum&view=fd5931a9-06c4-5788-8e5c-6a9c9579d59f)

## Checkpoint Exam: Ethernet Concepts Exam

> ### Refer to the graphic. What type of cabling is shown?
>
> ![alt text](/ComputerNetworkCourseNotes/assets/L4_L7_test/image.png)
>
> 應選`fiber`
>
> ---
>
> ![alt text](/ComputerNetworkCourseNotes/assets/L4_L7_test/image-1.png)
>
> 應選`UTP`
>
> ---
>
> - UTP（無屏蔽雙絞線）：由四對不同顏色的線組成，這些線被扭繞在一起，並包裹在柔性塑料外殼中。UTP 是常見的網路纜線，主要用於以太網和電話連接。
> - STP（屏蔽雙絞線）：與 UTP 類似，但每對線都被包裹在金屬箔片屏蔽層中，再加上一層總體金屬編織或箔片作為外層屏蔽。這樣的設計可以減少外部電磁干擾，提供更好的抗干擾能力。
> - 同軸電纜（Coaxial Cable）：由一根銅導體構成，並且有一層柔性塑料絕緣層包裹在銅導體外面。常見於有線電視或網路連接中，能有效防止外部電磁干擾。
> - 光纖纜線（Fiber Optic Cable）：是由極細的透明玻璃纖維所組成，外面包覆有塑料絕緣層。光纖傳輸資料的速度非常快，並且能夠長距離傳輸，且不受電磁干擾的影響，常用於高速網路和長距離通信。

> ### With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?
>
> Crosstalk(串擾) is a type of noise, or interference that occurs when signal transmission on one wire interferes with another wire.  
> When current flows through a wire a magnetic field(磁場) is produced.  
> The produced magnetic field will interface the signal carried in the adjacent wire.
>
> ---
>
> 應選`the magnetic field around the adjacent pairs of wire`

> ### What are two characteristics of fiber-optic cable? (Choose two.)
>
> Fiber-optic cabling supports higher bandwidth than UTP for longer distances.  
> Fiber is immune to EMI and RFI, but costs more, requires more skill to install, and requires more safety precautions.
>
> ---
>
> 應選`It is more expensive than UTP cabling is.`、`It is not affected by EMI or RFI.`

> ### What is a primary role of the Physical layer in transmitting data on the network?
>
> The OSI physical layer provides the means to transport the bits that make up a frame across the network media.  
> This layer accepts a complete frame from the data link layer and encodes it as a series of signals that are transmitted to the local media.
>
> ---
>
> 應選`create the signals that represent the bits in each frame on to the media`

> ### Match the situation with the appropriate use of network media.
>
> ![alt text](/ComputerNetworkCourseNotes/assets/L4_L7_test/image-2.png)

> ### What is a characteristic of the LLC sublayer?
>
> The **Logical Link Control (LLC)** defines the software processes that provide services to the network layer protocols.  
> The information is placed by LLC in the frame and identifies which network layer protocol is being used for the frame.  
> This information allows multiple Layer 3 protocols, such as IPv4 and IPv6, to utilize the same network interface and media.
>
> ---
>
> 應選`It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.`

> ### What is contained in the trailer of a data-link frame?
>
> The trailer in a data-link frame contains error detection information that is pertinent to the frame included in the FCS field.  
> The header contains control information, such as the addressing, while the area that is indicated by the word "data" includes the data, transport layer PDU, and the IP header.
>
> ---
>
> 應選`error detection`

> ### What type of communication rule would best describe CSMA/CD?
>
> Carrier sense multiple access collision detection (CSMA/CD) is the access method used with Ethernet.  
> The access method rule of communication dictates how a network device is able to place a signal on the carrier.  
> CSMA/CD dictates those rules on an Ethernet network and CSMA/CA dictates those rules on an 802.11 wireless LAN.
>
> ---
>
> 應選`access method`

> ### What are three ways that media access control is used in networking? (Choose three.)
>
> Wired Ethernet networks use CSMA/CD for media access control.  
> IEEE 802.11 wireless networks use CSMA/CA, a similar method.  
> Media access control defines the way data frames get placed on the media.  
> The controlled access method is deterministic, not a contention-based access to networks.  
> Because each device has its own time to use the medium, controlled access networks such as legacy Token Ring do not have collisions.
>
> ---
>
> 應選`Media access control provides placement of data frames onto the media.`、`Data link layer protocols define the rules for access to different media.`、`Ethernet utilizes CSMA/CD.`

> ### During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?
>
> The Ethernet frame includes the source and destination physical address.  
> The trailer includes a CRC value in the Frame Check Sequence field to allow the receiving device to determine if the frame has been changed (has errors) during the transmission.
>
> ---
>
> 應選`The physical address is added.`

> ### Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)
>
> ---
>
> 應選`header`、`data`、`trailer`

> ### Which statement describes a characteristic of the frame header fields of the data link layer?
>
> All data link layer protocols encapsulate the Layer 3 PDU within the data field of the frame.  
> However, the structure of the frame and the fields that are contained in the header vary according to the protocol.  
> Different data link layer protocols may use different fields, like priority/quality of service, logical connection control, physical link control, flow control, and congestion control.
>
> ---
>
> 應選`They vary depending on protocols.`

> ### Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)
>
> An Ethernet frame is not processed and is discarded if it is smaller than the minimum (64 bytes) or if the calculated frame check sequence (FCS) value does not match the received FCS value.  
> Auto-MDIX (automatic medium-dependent interface crossover) is Layer 1 technology that detects cable straight-through or crossover types.  
> The source MAC address is not used to determine how the frame is received.  
> CEF (Cisco Express Forwarding) is a technology used to expedite Layer 3 switching.
>
> ---
>
> 應選`minimum frame size`、`Frame Check Sequence`

> ### What three items are contained in an Ethernet header and trailer? (Choose three.)
>
> ---
>
> 應選`source MAC address`、`error-checking information`、`destination MAC address`

> ### What is the purpose of the FCS field in a frame?
>
> The FCS field in a frame is used to detect any errors in the transmission and receipt of a frame.  
> This is done by comparing the CRC value within the frame against a computed CRC value of the frame.  
> If the two values do not match, then the frame is discarded.
>
> ---
>
> 應選`to determine if errors occurred in the transmission and reception`

> ### What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?
>
> Cut-through switching provides lower latency switching for high-performance computing (HPC) applications.  
> Cut-through switching allows more invalid frames to cross the network than store-and-forward switching.  
> The cut-through switching method can make a forwarding decision as soon as it looks up the destination MAC address of the frame.
>
> ---
>
> 應選`has a lower latency appropriate for high-performance computing applications​`

> ### Which switching method has the lowest level of latency?
>
> Fast-forward switching begins to forward a frame after reading the destination MAC address, resulting in the lowest latency.  
> Fragment-free reads the first 64 bytes before forwarding.  
> Store-and-forward has the highest latency because it reads the entire frame before beginning to forward it.  
> Both fragment-free and fast-forward are types of cut-through switching.
>
> ---
>
> 應選`fast-forward`

> ### What are two actions performed by a Cisco switch? (Choose two.)
>
> ---
>
> 應選`utilizing the MAC address table to forward frames via the destination MAC address`、`using the source MAC addresses of frames to build and maintain a MAC address table`

> ### Which advantage does the store-and-forward switching method have compared with the cut-through switching method?
>
> A switch using the store-and-forward switching method performs an error check on an incoming frame by comparing the FCS value against its own FCS calculations after the entire frame is received.  
> In comparison, a switch using the cut-through switching method makes quick forwarding decisions and starts the forwarding process without waiting for the entire frame to be received.  
> Thus a switch using cut-through switching may send invalid frames to the network. The performance of store-and-forward switching is slower compared to cut-through switching performance. Collision detection is monitored by the sending device.  
> Store-and-forward switching does not use IPv4 Layer 3 and 4 information for its forwarding decisions.
>
> ---
>
> 應選`frame error checking`

> ### Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?
>
> Fast-forward and fragment-free switching are variations of cut-through switching, which begins to forward the frame before the entire frame is received.
>
> ---
>
> 應選`store-and-forward switching`

> ### Which is a multicast MAC address?
>
> Multicast MAC addresses begin with the special value of 01-00-5E.
>
> ---
>
> 應選`01-00-5E-00-00-03`

> ### Which switching method uses the CRC value in a frame?
>
> When the store-and-forward switching method is used, the switch receives the complete frame before forwarding it on to the destination.  
> The cyclic redundancy check (CRC) part of the trailer is used to determine if the frame has been modified during transit.​​  
> In contrast, a cut-through switch forwards the frame once the destination Layer 2 address is read.  
> Two types of cut-through switching methods are fast-forward and fragment-free.
>
> ---
>
> 應選`store-and-forward`

> ### What is the auto-MDIX feature?
>
> The auto-MDIX feature allows the device to configure its network port according to the cable type that is used (straight-through or crossover) and the type of device that is connected to that port.  
> When a port of a switch is configured with auto-MDIX, this switch can be connected to another switch by the use of either a straight-through cable or a crossover cable.
>
> ---
>
> 應選`It enables a device to automatically configure an interface to use a straight-through or a crossover cable.`

> ### Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?
>
> The destination MAC address is used for local delivery of Ethernet frames.  
> The MAC (Layer 2) address changes at each network segment along the path.  
> As the frame leaves the web server, it will be delivered by using the MAC address of the default gateway.
>
> ---
>
> 應選`00-60-2F-3A-07-CC`

> ### What are two examples of the cut-through switching method? (Choose two.)
>
> Store-and forward switching accepts the entire frame and performs error checking using CRC before forwarding the frame.  
> Store-and-forward is often required for QOS analysis.  
> Fast-forward and fragment-free are both variations of the cut-through switching method where only part of the frame is received before the switch begins to forward it.
>
> ---
>
> 應選`fragment-free switching`、`fast-forward switching`

> ### What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)
>
> Optical fiber cable transmits data over longer distances and at higher bandwidths than any other networking media.  
> Unlike copper wires, fiber-optic cable can transmit signals with less attenuation and is completely immune to EMI and RFI.
>
> ---
>
> 應選`greater distances per cable run`、`greater bandwidth potential`

> ### Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?​
>
> A straight-through cable is commonly used to interconnect a host to a switch and a switch to a router.  
> A crossover cable is used to interconnect similar devices together like switch to a switch, a host to a host, or a router to a router.  
> If a switch has the MDIX capability, a crossover could be used to connect the switch to the router; however, that option is not available.  
> A rollover cable is used to connect to a router or switch console port.
>
> ---
>
> 應選`1 - rollover, 2 - straight-through, 3 - crossover`

> ### Refer to the exhibit. What is wrong with the displayed termination?
>
> ![alt text](/ComputerNetworkCourseNotes/assets/L4_L7_test/image-3.png)
>
> ---
>
> 應選`The untwisted length of each wire is too long.`

> ### What does the term "attenuation" mean in data communication?
>
> ---
>
> 應選``

> ### What is a characteristic of the LLC sublayer?
>
> Data is transmitted on copper cables as electrical pulses.  
> A detector in the network interface of a destination device must receive a signal that can be successfully decoded to match the signal sent.  
> However, the farther the signal travels, the more it deteriorates.  
> This is referred to as signal attenuation.
>
> ---
>
> 應選`loss of signal strength as distance increases`

> ### Open the PT Activity. Perform the tasks in the activity instructions and then answer the question. Which port does Switch0 use to send frames to the host with the IPv4 address 10.1.1.5?
>
> Issuing the command ipconfig /all from the PC0 command prompt displays the IPv4 address and MAC address.  
> When the IPv4 address 10.1.1.5 is pinged from PC0, the switch stores the source MAC address (from PC0) along with the port to which PC0 is connected.  
> When the destination reply is received, the switch takes the destination MAC address and compares to MAC addresses stored in the MAC address table.  
> Issuing the show mac-address-table on the PC0 Terminal application displays two dynamic MAC address entries.  
> The MAC address and port entry that does not belong to PC0 must be the MAC address and port of the destination with the IPv4 address 10.1.1.5.
>
> ---
>
> 應選`Fa0/11`

> ### What OSI physical layer term describes the measure of usable data transferred over a given period of time?
>
> ---
>
> 應選`goodput`

> ### Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)
>
> ---
>
> 應選`Controls the NIC responsible for sending and receiving data on the physical medium.`、`Adds Layer 2 control information to network protocol data.`

> ### What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?
>
> ---
>
> 應選`The switch forwards it out all ports except the ingress port.`

> ### What is a characteristic of the LLC sublayer?
>
> ---
>
> 應選``

> ### What is a characteristic of the LLC sublayer?
>
> ---
>
> 應選``

> ### What is a characteristic of the LLC sublayer?
>
> ---
>
> 應選``
