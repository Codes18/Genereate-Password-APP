
        const passwordBox = document.getElementById('password');
        const Copys = document.querySelector(".icon")

        const length = 12;
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numbersg = "0123456789";
        const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
        const others = " " + '"\\';


        const allchar = upperCase + lowerCase + numbersg + symbols + others;



        function generatePwd() {
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)]
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
            password += numbersg[Math.floor(Math.random() * numbersg.length)]
            password += symbols[Math.floor(Math.random() * symbols.length)]
            password += others[Math.floor(Math.random() * others.length)]


            while (length > password.length) {
                password += allchar[Math.floor(Math.random() * allchar.length)]
            }
            passwordBox.value = password;


            
        }

        Copys.addEventListener('click', () => {

            const currenPwd = passwordBox.value.trim();

            const msgDiv = document.querySelector('.texts');
            if (currenPwd === "") {
                alert(" ⚠️ Please Generate Password first ! ");
                msgDiv.innerHTML = ' ⚠️ Please Generate Password first !  ';
                msgDiv.style.display = "block";


                setTimeout(()=>{
                    msgDiv.style.display = "none";
                },2000)
                return;
            } else {
                navigator.clipboard.writeText(passwordBox.value).then(() => {
                    alert(' ✅ Password Copied! ');

                    msgDiv.innerHTML = "  ✅ Password Copied!  ";
                
                    msgDiv.style.display = 'block';
                        passwordBox.value = "";
                        setTimeout(()=>{
                            msgDiv.style.display = "none";
                        },2000)

                }).catch(() => {
                    alert(" ❌ Failed to Copy.. ")
                })

            }
        })



        
        function clearbtn() {

            if(passwordBox.value.trim() === ""){
                alert(" ⚠️ Please Generate Password first !")
                 passwordBox.value= "";
            }else{
            alert(" 🗑️ Are you sure you want to clear the current password? ")
            passwordBox.value = "";

            }
        }






