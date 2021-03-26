# vueblog-vue

2021/3/26 日处理了错误的bug

显示不出来弹窗 原来是服务器返回回来的json数据 不是msg而是message下次一定注意这个错误

2021/3/26 处理了一个不能退出的bug 必须要启动 redis

cd /Users/ardwang/Project/redis-6.2.1 
ardwangdeMac-Pro:redis-6.2.1 ardwang$ redis-server


错误如下：

记一次使用Jedis客户端获取不到资源（Could not get a resource from the pool）的填坑经历