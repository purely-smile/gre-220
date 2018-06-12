//index.js
//获取应用实例
const app = getApp()
const answerArr = [["C"], ["C", "A", "C"], ["E", "AC"], ["E", "There", "is a"], ["E", "D", "B"], ["D"], ["AB", "A"], ["AC", "A"], ["C", "C"], ["C"], ["A", "E", "E"], ["AB", "A"], ["B", "A", "C"], ["C"], ["ABC", "AB"], ["AB", "E"], ["B", "D"], ["B"], ["C", "B", "A"], ["D", "A"], ["B", "AB", "E"], ["D"], ["E", "E"], ["A", "B"], ["C", "B", "D", "E"], ["D"], ["D", "E", "C"], ["E", "B"], ["A", "E", "D"], ["C"], ["C", "D"], ["B", "E"], ["A"], ["C", "C", "E"], ["D", "A"], ["A", "A", "E"], ["E"], ["A", "B"], ["AB", "B"], ["C", "D"], ["E"], ["B", "C", "A"], ["B", "E"], ["E", "AB"], ["E", "A"], ["A", "C"], ["B", "D", "A"], ["C"], ["E", "D"], ["A", "E"], ["B"], ["C", "B", "E"], ["C", "D"], ["B", "D", "A"], ["C"], ["D", "A"], ["D", "B"], ["E", "AC"], ["B"], ["E", "E", "B"], ["D", "E"], ["D", "B", "C"], ["D"], ["D", "A"], ["C", "B"], ["D"], ["D", "C", "C"], ["B"], ["C", "C"], ["ABC", "D"], ["C"], ["A", "B", "B"], ["B", "ABC"], ["C", "ABC", "A"], ["D"], ["E", "C"], ["ABC", "E"], ["E"], ["C", "D"], ["B", "C"], ["D", "B", "C", "E"], ["E", "B", "B", "D"], ["B", "C", "B", "E"], ["B", "E", "C", "D"], ["E", "B", "A", "B"], ["D", "D", "B", "E"], ["D", "B", "D", "E"], ["D", "E"], ["B", "C", "E", "A"], ["A", "B", "B"], ["B", "D", "D"], ["2段1句", "E"], ["C"], ["D", "A", "C"], ["C", "B", "E"], ["E", "E"], ["ABC", "C"], ["D", "E", "E"], ["D"], ["D", "A"], ["A"], ["AC", "D"], ["D"], ["A", "AC"], ["AB", "A"], ["D", "B"], ["D"], ["A", "B"], ["D", "E", "E", "A"], ["C", "D", "AB", "Conversely"], ["A", "E", "E", "B"], ["D", "E", "C", "A"], ["B", "C", "C", "D"], ["C", "D", "C", "E"], ["D", "B", "E", "A"], ["B"], ["E"], ["E", "B", "A", "B"], ["C", "E", "D", "C"], ["A", "D"], ["D", "A"], ["B", "B"], ["D", "E"], ["D"], ["E", "D", "B", "C"], ["C", "A"], ["A", "E", "B", "A"], ["B", "D", "E"], ["AB", "BC"], ["ABC", "C"], ["C"], ["BC", "第一句", "E"], ["B", "D", "E", "B"], ["A", "C"], ["B", "A", "AC"], ["ABC", "C"], ["AB", "B"], ["B"], ["E", "A"], ["AC", "B"], ["B", "E"], ["E"], ["D", "C", "A"], ["A", "E"], ["A", "B", "D"], ["C", "D"], ["E", "E", "B"], ["BC", "B"], ["D", "yet micc...", "A"], ["BC", "C"], ["D", "D", "A"], ["第二句", "E"], ["D", "ABC"], ["E", "C"], ["B", "E"], ["B", "A", "A"], ["B"], ["C", "B", "E"], ["A"], ["E", "C"], ["A", "D", "E"], ["D", "E", "E"], ["C", "E", "C", "D"], ["C", "A", "B", "B"], ["B", "C", "D", "B"], ["C", "C", "A", "B"], ["B"], ["E"], ["C"], ["A"], ["B"], ["C", "A"], ["D", "E", "C"], ["B", "B", "B"], ["AB", "D"], ["B", "C"], ["D"], ["E"], ["A"], ["E"], ["C", "E", "E", "C"], ["A"], ["A", "B"], ["E", "C"], ["C", "B", "D", "A", "B", "E", "B"], ["D", "B", "A"], ["B", "D"], ["D"], ["C", "D"], ["A"], ["B", "C"], ["D", "A", "C"], ["C"], ["D", "D", "D", "B"], ["A"], ["D", "A", "B"], ["B", "C"], ["BC", "D"], ["E"], ["A", "D", "D", "B"], ["E"], ["B", "B"], ["B", "C", "D", "E"], ["A", "It seems", "B", "C"], ["B", "D"], ["E"], ["D"], ["D", "Yet Mc...", "A"], ["BC", "C"], ["D", "...", "A"], ["C"], ["A"], ["C", "B", "D"], ["A", "C", "E", "D"], ["C"], ["B", "C", "A", "A"], ["C", "D", "B", "D", "A", "D", "C"], ["B", "A", "E", "A", "E", "B", "D"], ["B", "D"], ["B", "D"]];
Page({
  data: {
    answer:'',
    keyword:null,
    focus:true
  },
  onLoad: function () {

  },
  search:function(){
    const {keyword} = this.data;
    if (!keyword || keyword <= 0 || keyword > 220) {
       this.showError("请输入1-220数字");
       return this.setData({
         keyword:null,
         answer:'',
         focus:true
       });
    }
    this.setData({
      answer:answerArr[keyword-1].join(' , ')
    })
  },
  clear:function(){
    this.setData({
      answer:'',
      keyword:null,
      focus:true
    })
  },
  onChange:function(e){
    const keyword = e.detail.value;
    this.setData({
      keyword,
      answer:''
    });
  },
  showError:function(msg){
    wx.showToast({
      title: msg,
    })
  }
})
