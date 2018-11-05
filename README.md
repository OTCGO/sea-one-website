## model
block
    height
    

transaction

bonus

balance


asset


history



wallet



https://api.otcgo.cn
1.
2.


1 持久化state  
    钱包登陆 注册 ，本地   wif ,pravte  -> state  windows() store 
    资产列表             资产   state

2 一次性


提取  gas  -> 需要手续费gas 
     ong  -》 需要手续费ong   store -> ong 


待提取    1 
可提取    5

转化成 


余额    10




给自己转账就是把  待提取 -》 可提取


提取api 把  可提取 -》 余额


最后都要广播

转账   构造交易 -》 广播
提取   提取api -> 广播 









effect 需要注册 app.module





1. 直接调用 service 
2. action  没有api  不走effect 
3. action 有api  走effect