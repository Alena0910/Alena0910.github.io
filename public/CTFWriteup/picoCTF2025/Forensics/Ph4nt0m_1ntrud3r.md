在 wireshark 中可以看到有類似 base64 的東西

![wireshark](/CTFWriteup/picoCTF2025/Forensics/assets/Ph4nt0m_1ntrud3r/image.png)

```
BNAUd6U=
ezF0X3c0cw==
n0tn4jY=
YZYAvEs=
cGljb0NURg==
hWiUvqQ=
XzM0c3lfdA==
fQ==
gVsRoPU=
w2iRHng=
YmhfNHJfZQ==
oZYrPGE=
+Zyh8zU=
2FljUAw=
z3Iyzvg=
NWU4Yzc4ZA==
gCjvy9o=
G6UztJw=
5h7f9gw=
LpPuQ6w=
bnRfdGg0dA==
QHESHGY=
```

用 cyberchef 可以看到有很像flag的東西

![cyberchef](/CTFWriteup/picoCTF2025/Forensics/assets/Ph4nt0m_1ntrud3r/image-1.png)

題目提到`The attacker has cleverly concealed his moves in well timely manner.`  
對時間進行排序

![sorted](/CTFWriteup/picoCTF2025/Forensics/assets/Ph4nt0m_1ntrud3r/image-2.png)

```
hWiUvqQ=
w2iRHng=
gVsRoPU=
n0tn4jY=
YZYAvEs=
z3Iyzvg=
BNAUd6U=
gCjvy9o=
+Zyh8zU=
oZYrPGE=
2FljUAw=
5h7f9gw=
QHESHGY=
LpPuQ6w=
G6UztJw=
cGljb0NURg==
ezF0X3c0cw==
bnRfdGg0dA==
XzM0c3lfdA==
YmhfNHJfZQ==
NWU4Yzc4ZA==
fQ==
```

得到新的 flag

![flag](/CTFWriteup/picoCTF2025/Forensics/assets/Ph4nt0m_1ntrud3r/image-3.png)

```
picoCTF{1t_w4snt_th4t_34sy_tbh_4r_e5e8c78d}
```
