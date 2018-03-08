<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="user_name">
                    <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm2: {
          user_name: 'ivanyb',
          password: '123',
        },
        rules2: {
            user_name:[{required:true,message:"请输入用户名",trigger:"blur"}],
            password:[{required:true,message:"请输入密码",trigger:"blur"}]
        }
      };
    },
    methods: {
        login(){            
            this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
                if(res.data.status == 0){
                    this.$alert('登陆成功', '提示', {
                        callback: () => {
                            localStorage.setItem("user_name",res.data.message.user_name);
                            let nextPage = this.$route.query.next || '/goods/list';
                            this.$router.push({ path: nextPage });
                        }
                    });
                }else{
                    this.$alert(res.data.message)
                }
            })
        },
      submitForm(formuser_name) {
        this.$refs[formuser_name].validate((valid) => {
          if (valid) {           
            this.login()
          } else {
            this.$alert("账号和密码不正确")
          }
        });
      },
      resetForm(formuser_name) {
        this.$refs[formuser_name].resetFields();
      }
    }
  }
</script>

<style scoped lang="less">
    .login {
        height: 100%;
        section {
            width: 400px;
            height: 200px;
            margin: 0 auto;
            background: #ccc;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            border: 3px solid #fff;
            border-radius: 5px;
            padding:50px 80px 10px 10px;
        }
    }
</style>