/* ========================================================
                        接口配置文件
======================================================== */
// 域名
// const host = 'http://106.12.15.251:8090'
// const host = 'https://bimbochinaclub.ysmine.com:8443'
const host = 'https://bimbochinaclub.ysmine.com'

export const service = {
  // 首页获取步数
  wxStepDecrypt: `${host}/index.php/Api/index/index`,
  // 查询我的成绩
  getMyScore: `${host}/index.php/Api/index/get_score`,
  // 首页签到
  signIn: `${host}/index.php/Api/index/signIn`,
  // wx支付订单获取
  charityPay: `${host}/index.php/Api/index/pay`,
  // 发红包
  wxSendRed: `${host}/index.php/Api/index/send_red`,
  // 赛事信息获取
  // matchInfo: `${host}/noAuth/runMatchInfos/matchInfo`,
  // 报名
  addPlayer: `${host}/index.php/Api/index/add_player`,
  // 根据openId获取此用户下报名付钱与未付钱的
  getPlayerList: `${host}/index.php/Api/index/player_list`,
  // 获得初始金额(报名付钱)
  getPayMoney: `${host}/index.php/Api/index/pay_start`,
  // wx支付订单获取
  playerPayOrders: `${host}/index.php/Api/index/player_pay`,
  // 用户抽奖
  getPrize: `${host}/index.php/Api/index/prize`,
  // 抽奖填写地址
  prizeForm: `${host}/index.php/Api/index/prize_user`,
  // 获取实时排名列表
  getSjsRealTimeRank: `${host}/index.php/Api/index/run_log`,
  // 获取赏金赛排名
  getSjsRank: `${host}/index.php/Api/index/order_index`,
  // 获取我的奖品
  getMyRewardList: `${host}/index.php/Api/index/my_gift`,
  // 领取我的奖品
  getMyReward: `${host}/index.php/Api/index/get_gift`,
  host
}

export default {
  service
}
