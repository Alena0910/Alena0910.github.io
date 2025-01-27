題目是

> As you know, there are DES and 3DES in reality. However, I don't like the existing composition. Hence, I invented 2DES, which is a combination of 2 DESs.

開了提示

> Hint: NIST SP 800-67 are sometimes helpful

去找到 NIST SP 800-67 並上傳到notebooklm，會發現TDEA有弱金鑰的問題

> 弱金鑰: 會將明文加密為相同密文  
> 半弱金鑰: 成對的金鑰會將明文加密為相同的密文

![NotebookLM](/CTFWriteup/Crypto/assets/2DES/image.png)

從題目中給的code可知，其中有一對在弱金鑰的範圍內

```
#!/usr/bin/env python
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad
from random import choice
from os import urandom
from time import sleep

def encrypt(msg: bytes, key1, key2):
    des1 = DES.new(key1, DES.MODE_ECB)
    des2 = DES.new(key2, DES.MODE_ECB)
    return des2.encrypt(des1.encrypt(pad(msg, des1.block_size)))

def main():
    flag = open('/flag.txt', 'r').read().strip().encode()

    print("This is a 2DES encryption service.")
    print("But you can only control one of the key.")
    print()

    while True:
        print("1. Encrypt flag")
        print("2. Decrypt flag")
        print("3. Exit")
        option = int(input("> "))

        if option == 1:
            # I choose a key
            # You can choose another one
            keyset = ["1FE01FE00EF10EF1", "01E001E001F101F1", "1FFE1FFE0EFE0EFE"]
            key1 = bytes.fromhex(choice(keyset))
            key2 = bytes.fromhex(input("Enter key2 (hex): ").strip())

            ciphertext = encrypt(flag, key1, key2)
            print("Here is your encrypted flag:", flush=True)
            print("...", flush=True)
            sleep(3)
            if ciphertext[:4] == flag[:4]:
                print(ciphertext)
                print("Hmmm... What a coincidence!")
            else:
                print("System error!")
            print()

        elif option == 2:
            print("Decryption are disabled")
            print()

        elif option == 3:
            print("Bye!")
            exit()

        else:
            print("Invalid option")
            print()

if __name__ == "__main__":
    main()

```

```
1FE01FE00EF10EF1 和 E01FE01FF10EF10E
```

![flag](/CTFWriteup/Crypto/assets/2DES/image-1.png)

```
TSC{th3_Key_t0_br34k_DES_15_tHe_keY}
```

#TSCCTF2025 #Crypto
