import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
const dictionary = {
   zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      password2:'确认密码',
      account: '账号',
      tel: '手机号',
      verify:'验证码',
      realname:'真实姓名',
      idcard:'身份证号'
    }
  }
}

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary
})
