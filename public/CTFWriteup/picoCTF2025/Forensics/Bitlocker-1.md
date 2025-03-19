用 Autopsy 去查看 bitlocker-1.dd

![mount image](/CTFWriteup/picoCTF2025/Forensics/assets/Bitlocker-1/image.png)

發現`-FVE-FS-`

```sh
sudo apt install john
bitlocker2john -i bitlocker-1.dd > bitlocker_hash.txt
```

```sh
cat bitlocker_hash.txt
Encrypted device bitlocker-1.dd opened, size 100MB
Salt: 2b71884a0ef66f0b9de049a82a39d15b
RP Nonce: 00be8a46ead6da0106000000
RP MAC: a28f1a60db3e3fe4049a821c3aea5e4b
RP VMK: a1957baea68cd29488c0f3f6efcd4689e43f8ba3120a33048b2ef2c9702e298e4c260743126ec8bd29bc6d58

UP Nonce: d04d9c58eed6da010a000000
UP MAC: 68156e51e53f0a01c076a32ba2b2999a
UP VMK: fffce8530fbe5d84b4c19ac71f6c79375b87d40c2d871ed2b7b5559d71ba31b6779c6f41412fd6869442d66d


User Password hash:
$bitlocker$0$16$cb4809fe9628471a411f8380e0f668db$1048576$12$d04d9c58eed6da010a000000$60$68156e51e53f0a01c076a32ba2b2999afffce8530fbe5d84b4c19ac71f6c79375b87d40c2d871ed2b7b5559d71ba31b6779c6f41412fd6869442d66d
Hash type: User Password with MAC verification (slower solution, no false positives)
$bitlocker$1$16$cb4809fe9628471a411f8380e0f668db$1048576$12$d04d9c58eed6da010a000000$60$68156e51e53f0a01c076a32ba2b2999afffce8530fbe5d84b4c19ac71f6c79375b87d40c2d871ed2b7b5559d71ba31b6779c6f41412fd6869442d66d
Hash type: Recovery Password fast attack
$bitlocker$2$16$2b71884a0ef66f0b9de049a82a39d15b$1048576$12$00be8a46ead6da0106000000$60$a28f1a60db3e3fe4049a821c3aea5e4ba1957baea68cd29488c0f3f6efcd4689e43f8ba3120a33048b2ef2c9702e298e4c260743126ec8bd29bc6d58
Hash type: Recovery Password with MAC verification (slower solution, no false positives)
$bitlocker$3$16$2b71884a0ef66f0b9de049a82a39d15b$1048576$12$00be8a46ead6da0106000000$60$a28f1a60db3e3fe4049a821c3aea5e4ba1957baea68cd29488c0f3f6efcd4689e43f8ba3120a33048b2ef2c9702e298e4c260743126ec8bd29bc6d58
```

破解`Recovery Password`

```sh
hashcat -m 22100 -a 0 bitlocker_hash.txt hashcat-6.2.6/rockyou.txt
```

![hashcat](/CTFWriteup/picoCTF2025/Forensics/assets/Bitlocker-1/image-1.png)

得到結果

```
$bitlocker$0$16$cb4809fe9628471a411f8380e0f668db$1048576$12$d04d9c58eed6da010a000000$60$68156e51e53f0a01c076a32ba2b2999afffce8530fbe5d84b4c19ac71f6c79375b87d40c2d871ed2b7b5559d71ba31b6779c6f41412fd6869442d66d:jacqueline
```

所以密碼是`jacqueline`

無法用密碼去解密，所以用金鑰去 recover

```sh
dislocker -V bitlocker-1.dd -p'$bitlocker$2$16$2b71884a0ef66f0b9de049a82a39d15b$1048576$12$00be8a46ead6da0106000000$60$a28f1a60db3e3fe4049a821c3aea5e4ba1957baea68cd29488c0f3f6efcd4689e43f8ba3120a33048b2ef2c9702e298e4c260743126ec8bd29bc6d58' -- ~/test/mount
```

```sh
sudo mount -o ro,loop ./test/mount/dislocker-file ./test/decrypted/
ls -l ./test/decrypted/
```

![flag.txt](/CTFWriteup/picoCTF2025/Forensics/assets/Bitlocker-1/image-2.png)

```
cat ./test/decrypted/flag.txt
```

![flag](/CTFWriteup/picoCTF2025/Forensics/assets/Bitlocker-1/image-3.png)

```
picoCTF{us3_b3tt3r_p4ssw0rd5_pl5!_3242adb1}
```
