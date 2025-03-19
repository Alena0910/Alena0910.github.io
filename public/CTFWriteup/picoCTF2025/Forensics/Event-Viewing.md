這一題要找到三段 flag

![logs](/CTFWriteup/picoCTF2025/Forensics/assets/Event-Viewing/image.png)

![flag1](/CTFWriteup/picoCTF2025/Forensics/assets/Event-Viewing/image-1.png)

把`cGljb0NURntFdjNudF92aTN3djNyXw==`拿去decode

```
picoCTF{Ev3nt_vi3wv3r_
```

因為第一個拿到的是 base64 形式，推斷剩下兩段都是 base64 ，用`尋找`去搜尋`==`或`=`結尾的字串，加快找flag的速度

![flag2](/CTFWriteup/picoCTF2025/Forensics/assets/Event-Viewing/image-2.png)
把`MXNfYV9wcjN0dHlfdXMzZnVsXw==`拿去decode

```
1s_a_pr3tty_us3ful_
```

![flag3](/CTFWriteup/picoCTF2025/Forensics/assets/Event-Viewing/image-3.png)

把`MXNfYV9wcjN0dHlfdXMzZnVsXw==`拿去decode

```
t00l_81ba3fe9}
```

最後得到 flag

```
picoCTF{Ev3nt_vi3wv3r_1s_a_pr3tty_us3ful_t00l_81ba3fe9}
```
