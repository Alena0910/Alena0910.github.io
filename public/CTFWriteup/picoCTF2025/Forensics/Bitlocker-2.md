```sh
gunzip memdump.mem.gz

git clone https://github.com/volatilityfoundation/volatility3.git
cd volatility3/
python3 -m venv venv && . venv/bin/activate
pip install -e ".[dev]"
```

在還沒有打開`bitlocker-2.dd`的情況下在`memdump.mem`中找到 flag

![flag](/CTFWriteup/picoCTF2025/Forensics/assets/Bitlocker-2/image-1.png)

```
picoCTF{B1tl0ck3r_dr1v3_d3crypt3d_9029ae5b}
```
