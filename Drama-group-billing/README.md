# Business Background
用户承包戏剧团表演的业务下，需要一个打印账单 & 计算积分的应用程序
- 费用计算
  - 悲剧
    - 基本费用：40000
    - 如果出场人数大于30人，对于超出人数，需另外增加费用1000/人
  - 喜剧
    - 如果出场人数大于20人，缴纳30000基本费用，对于超出人数，需另外增加费用500/人
    - 如果出场人数小于20人，只需付费500/人
- 积分计算
  - 一般积分
    - 如果出场人数大于30人，增加积分：出场人数 * 1
  - 附加积分
    - 如果是喜剧，除开一般积分，额外积分为：出场人数 / 5
    

# Front condition
- 剧目数据存储在play.json文件
- 开出的账单存储在invoices.json文件


# Refactoring

1. 提取函数 [commitID: b8fc88e]
  - amountFor(performance)             
2. 修改变量 [commitID: 85f60f7]
  - thisAmount--->result
  - 函数的返回值都命名为result
3. 修改函数参数的变量名 [commitID: 56f473c]
  - perf--->aPerformance
  - 参数名带上类型名
  - 无特殊情况使用不定冠词修饰
4. 使用查询方法取代局部变量 [commitID: 9b33b80,8e1f9a7]
  - play--->playFor(aPerformance)
  - thisAmount--->amountFor(aPerformance)
5. 提取函数 [commitID: edbbfc1]
  - volumeCreditsFor(aPerformance)
