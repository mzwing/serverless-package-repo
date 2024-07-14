# Serverless Package Repo

Serverless can also build a package repo!

Serverless也能建造一个软件仓库！

Still under development, use with caution.

仍在开发中，谨慎使用。

## Currently Provide / 目前提供

- [chaotic-aur](https://aur.chaotic.cx/)

## How to use / 食用方法

Edit `/etc/pacman.conf`.

改`/etc/pacman.conf`。

### chaotic-aur

```conf
[chaotic-aur]
Server = https://packages.services.mzwing.eu.org/archlinux/$repo/$repo/$arch
```

## License / 开源协议

MIT
