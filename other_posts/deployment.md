---
title: "Deployment"
date: "2023-06-15"
---

# 安装Apache服务

#### 1.执行命令安装Apache及其扩展包

yum install -y httpd httpd-manual mod_SSL mod_perl mod_auth_mysql

#### 2.依次执行命令启动Apache并设置自启动

systemctl start httpd
systemctl enable httpd

#### 3.执行命令查看Apache运行状态

systemctl status httpd

# 安装Java JDK

#### 1.执行命令，查看yum源中JDK版本

yum list java*

#### 2.执行命令，使用yum安装JDK1.8

yum -y install java-1.8.0-openjdk*

#### 3.执行命令，查看是否安装成功

java -version

# 安装MySQL数据库

#### 1.执行命令，下载并安装MySQL

wget <http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm> &&
yum -y install mysql57-community-release-el7-10.noarch.rpm &&
yum install -y mysql-community-server --nogpgcheck

#### 2.执行命令，启动MySQL数据库

systemctl start mysqld.service

#### 3.执行命令查看MySQL数据库的运行状态

systemctl status mysqld.service

#### 4.执行命令，查看MySQL数据库的初始密码

grep "password" /var/log/mysqld.log

#### 5.执行命令，登录数据库

mysql -u root -p

#### 6.执行命令，修改MySQL数据库的初始密码

密码必须同时包含大小写英文字母、数字和特殊符号中的三类字符。
注意每条完整的SQL命令结尾都有一个半角分号（;），如果多行命令中间没有分号分隔，这些命令将不会执行，直至遇到一个分号。

set global validate_password_policy=0;  #修改密码安全策略为低（仅校验密码长度，至少8位）。
ALTER USER 'root'@'localhost' IDENTIFIED BY '<新密码>';

#### 7.执行命令，授予root用户远程管理权限

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '<新密码>';

#### 8.执行命令，创建一个存储网站内容的数据库pbootcms

create database mycms;

#### 9.执行命令，查看数据库是否创建成功

show databases;

#### 10. 输入exit，退出数据库

#### 11、linux下强制修改mysql登陆密码

1. 设置mysql无密码登陆

```c
vim /etc/my.cnf
找到[mysqld]段，使光标停留在段中任意处使用键盘输入skip-grant-tables并保存退出
```

2. 重启mysql `service mysqld restart`
3. mysql -u -root进入mysql
4. 设置密码，依次输入以下命令

```c
use mysql
update mysql.user set authentication_string=password('<新密码>') where user='root';`
flush privileges;
exit;
```

5. 将最开始修改的my.cnf文件恢复，再重启mysql即可

   

# 安装Tomcat

#### 1.执行命令，下载Tomcat压缩包

wget --no-check-certificate <https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.88/bin/apache-tomcat-8.5.88.tar.gz>

#### 2.执行命令，解压刚刚下载Tomcat包

tar -zxvf apache-tomcat-8.5.88.tar.gz

#### 3.执行命令，修改Tomcat名字

mv apache-tomcat-8.5.88  /usr/local/Tomcat8.5

#### 4.执行命令，为Tomcat授权

chmod +x /usr/local/Tomcat8.5/bin/*.sh

#### 5. 执行命令，修改Tomcat默认端口号为80

**说明：** Tomcat默认端口号为8080

sed -i 's/Connector port="8080"/Connector port="80"/' /usr/local/Tomcat8.5/conf/server.xml

#### 6. 启动Tomcat

/usr/local/Tomcat8.5/bin/./startup.sh

#### 7. 访问Tomcat

浏览器输入网址或IP地址
