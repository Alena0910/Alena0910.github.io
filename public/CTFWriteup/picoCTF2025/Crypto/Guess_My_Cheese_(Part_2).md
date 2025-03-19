Part 2 給我們起司名稱的名單，要找出具體加鹽的內容跟起司是甚麼。  
但是當下沒有看出題目的意思，是要以什麼樣的形式去加鹽以及加鹽的位置，所以用 pwntool 去 brute force

```python
from pwn import *
from struct import *

with open("cheese_list.txt", "r") as f:
    cheese_list = f.readlines()
    while True:
        try:
            r = remote("verbal-sleep.picoctf.net", 54640)
            r.recvuntil(b"What would you like to do?")
            r.sendline(b"g")
            cheese = random.choice(cheese_list).strip()
            salt = hex(random.randint(0, 256))[2:]
            print(f"cheese: {cheese}, salt: {salt}")
            r.recvuntil(b"So...what's my cheese?")
            r.sendline(cheese.encode())
            r.recvuntil(b"Annnnd...what's my salt?")
            r.sendline(salt.encode())
            res = r.recvall()
            if b"pico" in res:
                print(res)
                break
        except:
            pass
        r.close()

print("Done")

```

![flag](</CTFWriteup/picoCTF2025/Crypto/assets/Guess_My_Cheese_(Part_2)/image.png>)

這次的cheese是`Gouda`，加鹽的 hex 是`9f`

```
picoCTF{cHeEsY6ce3864c}
```
