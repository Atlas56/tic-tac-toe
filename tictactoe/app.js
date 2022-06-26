const block1=document.querySelector('.block1')
block1.addEventListener('click',blockCircle1)
const block2=document.querySelector('.block2')
block2.addEventListener('click',blockCircle2)
const block3=document.querySelector('.block3')
block3.addEventListener('click',blockCircle3)
const block4=document.querySelector('.block4')
block4.addEventListener('click',blockCircle4)
const block5=document.querySelector('.block5')
block5.addEventListener('click',blockCircle5)
const block6=document.querySelector('.block6')
block6.addEventListener('click',blockCircle6)
const block7=document.querySelector('.block7')
block7.addEventListener('click',blockCircle7)
const block8=document.querySelector('.block8')
block8.addEventListener('click',blockCircle8)
const block9=document.querySelector('.block9')
block9.addEventListener('click',blockCircle9)

let crossCircle=0
let count=0
let red1=0
let red2=0
let red3=0
let red4=0
let red5=0
let red6=0
let red7=0
let red8=0
let red9=0

let blue1=0 
let blue2=0
let blue3=0
let blue4=0
let blue5=0
let blue6=0
let blue7=0
let blue8=0
let blue9=0

function blockCircle1(){

   count+=1
   if(count==1){
    block1.classList.toggle('circleBlue')
    blue1=1
    }else if(count==2){
    block1.classList.toggle('circleRed')
    red1=1
    }else if(count==3){
    block1.classList.toggle('circleBlue')
    blue1=1
    }else if(count==4){
    block1.classList.toggle('circleRed')
    red1=1
    }else if(count==5){
    block1.classList.toggle('circleBlue')
    blue1=1
    }else if(count==6){
    block1.classList.toggle('circleRed')
    red1=1
    }else if(count==7){
    block1.classList.toggle('circleBlue')
    blue1=1
    }else if(count==8){
    block1.classList.toggle('circleRed')
    red1=1
    }else if(count==9){
    block1.classList.toggle('circleBlue')
    blue1=1
    }
    console.log('block1')
    console.log(blue1)
    console.log(red1)
    const lineTarget=document.querySelector('.lineTarget')
    if(red4==1 && red5==1 && red6==1){
        const lineTarget=document.querySelector('.lineTarget')
        lineTarget.classList.add('crossThroughmid')
        }
        if(red1==1 && red4==1 && red7==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughLeftAcross')
            }
        if(red2==1 && red5==1 && red8==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmidAcross')
            }
        if(red3==1 && red6==1 && red9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughRightAcross')
            }
        if(red1==1 && red2==1 && red3==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughLeft')
            }
        if(red7==1 && red8==1 && red9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughRight')
            }
        if(red1==1 && red5==1 && red9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughDiagonal2')
            }
        if(red3==1 && red5==1 && red7==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughDiagonal')
            }
                
        if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
        }
        if(blue1==1 && blue4==1 && blue7==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughLeftAcross')
            }
        if(blue2==1 && blue5==1 && blue8==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmidAcross')
            }
        if(blue3==1 && blue6==1 && blue9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughRightAcross')
            }
        if(blue1==1 && blue2==1 && blue3==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughLeft')
            }
        if(blue7==1 && blue8==1 && blue9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughRight')
            }
        if(blue1==1 && blue5==1 && blue9==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughDiagonal2')
            }
        if(blue3==1 && blue5==1 && blue7==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughDiagonal')
            }

    
}

function blockCircle2(){
    count+=1
    if(count==1){
        block2.classList.toggle('circleBlue')
        blue1=1
        }else if(count==2){
        block2.classList.toggle('circleRed')
        red2=1
        }else if(count==3){
        block2.classList.toggle('circleBlue')
        blue2=1
        }else if(count==4){
        block2.classList.toggle('circleRed')
        red2=1
        }else if(count==5){
        block2.classList.toggle('circleBlue')
        blue2=1
        }else if(count==6){
        block2.classList.toggle('circleRed')
        red2=1
        }else if(count==7){
        block2.classList.toggle('circleBlue')
        blue2=1
        }else if(count==8){
        block2.classList.toggle('circleRed')
        red2=1
        }else if(count==9){
        block2.classList.toggle('circleBlue')
        blue2=1
        }
        console.log('block2')
        console.log(blue2)
        console.log(red2)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
     }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
}
function blockCircle3(){
    count+=1
    if(count==1){
        block3.classList.toggle('circleBlue')
        blue3=1
        }else if(count==2){
        block3.classList.toggle('circleRed')
        red3=1
        }else if(count==3){
        block3.classList.toggle('circleBlue')
        blue3=1
        }else if(count==4){
        block3.classList.toggle('circleRed')
        red1=1
        }else if(count==5){
        block3.classList.toggle('circleBlue')
        blue3=1
        }else if(count==6){
        block3.classList.toggle('circleRed')
        red3=1
        }else if(count==7){
        block3.classList.toggle('circleBlue')
        blue3=1
        }else if(count==8){
        block3.classList.toggle('circleRed')
        red3=1
        }else if(count==9){
        block3.classList.toggle('circleBlue')
        blue3=1
        }
        console.log('block3')
        console.log(blue3)
        console.log(red3)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmid')
            }

            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
}
function blockCircle4(){
    count+=1
    if(count==1){
        block4.classList.toggle('circleBlue')
        blue4=1
        }else if(count==2){
        block4.classList.toggle('circleRed')
        red4=1
        }else if(count==3){
        block4.classList.toggle('circleBlue')
        blue4=1
        }else if(count==4){
        block4.classList.toggle('circleRed')
        red4=1
        }else if(count==5){
        block4.classList.toggle('circleBlue')
        blue4=1
        }else if(count==6){
        block4.classList.toggle('circleRed')
        red4=1
        }else if(count==7){
        block4.classList.toggle('circleBlue')
        blue4=1
        }else if(count==8){
        block4.classList.toggle('circleRed')
        red4=1
        }else if(count==9){
        block4.classList.toggle('circleBlue')
        blue4=1
        }
        console.log('block4')
        console.log(blue4)
        console.log(red4)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }

}
function blockCircle5(){
    count+=1
    if(count==1){
        block5.classList.toggle('circleBlue')
        blue5=1
        }else if(count==2){
        block5.classList.toggle('circleRed')
        red5=1
        }else if(count==3){
        block5.classList.toggle('circleBlue')
        blue5=1
        }else if(count==4){
        block5.classList.toggle('circleRed')
        red5=1
        }else if(count==5){
        block5.classList.toggle('circleBlue')
        blue5=1
        }else if(count==6){
        block5.classList.toggle('circleRed')
        red5=1
        }else if(count==7){
        block5.classList.toggle('circleBlue')
        blue5=1
        }else if(count==8){
        block5.classList.toggle('circleRed')
        red5=1
        }else if(count==9){
        block5.classList.toggle('circleBlue')
        blue5=1
        }
        console.log('block5')
        console.log(blue5)
        console.log(red5)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
}
function blockCircle6(){
    count+=1
    if(count==1){
        block6.classList.toggle('circleBlue')
        blue6=1
        }else if(count==2){
        block6.classList.toggle('circleRed')
        red6=1
        }else if(count==3){
        block6.classList.toggle('circleBlue')
        blue6=1
        }else if(count==4){
        block6.classList.toggle('circleRed')
        red6=1
        }else if(count==5){
        block6.classList.toggle('circleBlue')
        blue6=1
        }else if(count==6){
        block6.classList.toggle('circleRed')
        red6=1
        }else if(count==7){
        block6.classList.toggle('circleBlue')
        blue6=1
        }else if(count==8){
        block6.classList.toggle('circleRed')
        red6=1
        }else if(count==9){
        block6.classList.toggle('circleBlue')
        blue6=1
        }
        console.log('block6')
        console.log(blue6)
        console.log(red6)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){

                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
}
function blockCircle7(){
    count+=1
    if(count==1){
        block7.classList.toggle('circleBlue')
        blue7=1
        }else if(count==2){
        block7.classList.toggle('circleRed')
        red7=1
        }else if(count==3){
        block7.classList.toggle('circleBlue')
        blue7=1
        }else if(count==4){
        block7.classList.toggle('circleRed')
        red7=1
        }else if(count==5){
        block7.classList.toggle('circleBlue')
        blue7=1
        }else if(count==6){
        block7.classList.toggle('circleRed')
        red7=1
        }else if(count==7){
        block7.classList.toggle('circleBlue')
        blue7=1
        }else if(count==8){
        block7.classList.toggle('circleRed')
        red7=1
        }else if(count==9){
        block7.classList.toggle('circleBlue')
        blue7=1
        }
        console.log('block7')
        console.log(blue7)
        console.log(red7)
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }

}
function blockCircle8(){
    count+=1
    if(count==1){
        block8.classList.toggle('circleBlue')
        blue8=1
        }else if(count==2){
        block8.classList.toggle('circleRed')
        red8=1
        }else if(count==3){
        block8.classList.toggle('circleBlue')
        blue8=1
        }else if(count==4){
        block8.classList.toggle('circleRed')
        red8=1
        }else if(count==5){
        block8.classList.toggle('circleBlue')
        blue8=1
        }else if(count==6){
        block8.classList.toggle('circleRed')
        red8=1
        }else if(count==7){
        block8.classList.toggle('circleBlue')
        blue8=1
        }else if(count==8){
        block8.classList.toggle('circleRed')
        red8=1
        }else if(count==9){
        block8.classList.toggle('circleBlue')
        blue8=1
        }
        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){

                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }

}
function blockCircle9(){
    count+=1
    if(count==1){
        block9.classList.toggle('circleBlue')
        blue9=1
        }else if(count==2){
        block9.classList.toggle('circleRed')
        red9=1
        }else if(count==3){
        block9.classList.toggle('circleBlue')
        blue9=1
        }else if(count==4){
        block9.classList.toggle('circleRed')
        red9=1
        }else if(count==5){
        block9.classList.toggle('circleBlue')
        blue9=1
        }else if(count==6){
        block9.classList.toggle('circleRed')
        red9=1
        }else if(count==7){
        block9.classList.toggle('circleBlue')
        blue9=1
        }else if(count==8){
        block9.classList.toggle('circleRed')
        red9=1
        }else if(count==9){
        block9.classList.toggle('circleBlue')
        blue9=1
        }

        if(red4==1 && red5==1 && red6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(red1==1 && red4==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(red2==1 && red5==1 && red8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(red3==1 && red6==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(red1==1 && red2==1 && red3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(red7==1 && red8==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(red1==1 && red5==1 && red9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(red3==1 && red5==1 && red7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
                    
            if(blue4==1 && blue5==1 && blue6==1){
            const lineTarget=document.querySelector('.lineTarget')
            lineTarget.classList.add('crossThroughmid')
            }
            if(blue1==1 && blue4==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeftAcross')
                }
            if(blue2==1 && blue5==1 && blue8==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughmidAcross')
                }
            if(blue3==1 && blue6==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRightAcross')
                }
            if(blue1==1 && blue2==1 && blue3==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughLeft')
                }
            if(blue7==1 && blue8==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughRight')
                }
            if(blue1==1 && blue5==1 && blue9==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal2')
                }
            if(blue3==1 && blue5==1 && blue7==1){
                const lineTarget=document.querySelector('.lineTarget')
                lineTarget.classList.add('crossThroughDiagonal')
                }
}
