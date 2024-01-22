# 合思开放平台文档中心

合思开放平台文档中心

## 开发

> 开发环境 `node >= 14.0.0`

```bash
npm i
npm run start
```

本地预览地址：<http://localhost:3000/>

## 修改代码后，如何同时推送 `gitlab` 和 `github`

### 1.修改 `smartGit` 的配置文件，新配置一个远程地址 `gitlab`
![image](images/1.修改smartGit配置文件.png)

```bash
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = git@github.com:ekuaibao/open-platform-docs.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[taggrouping]
	groups =
	singles =
# 新增的远程地址
[remote "gitlab"]   
	url = git@git.ekuaibao.com:public-open/open-platform-docs.git
	fetch = +refs/heads/*:refs/remotes/gitlab/*
[branch "main"]
# 默认远程地址
	remote = gitlab
	merge = refs/heads/main
```

### 2.修改代码提交到本地后，推送2次即可，`gitlab` 1次，`github` 1次
![image](images/2.推送2次.png)












