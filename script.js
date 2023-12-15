const questionsForNotLate = {
    zero: 'Вы встали вовремя, ваши действия (введите номер):\n1.Пойти на пары\n2.Остаться дома.',
    one: 'Вы пришли на пару! Вы выспались и сдали лабораторную! Долга нет. Следующая пара - физ-ра, пойдете? (да/нет):'
  };
  const questionsForLate = {
    zero: 'Вы проспали! Ваши действия (введите номер):\n1.Почистить зубы, поесть, одеться и опоздать\n2.Не поесть и побежать на пары и не опоздать\n3.Остаться дома.',
    one1: 'Вы пришли на пару! Расположение преподавателя к вам не изменилось и вы сдали лабораторную работу, долга нет. Следующая пара - физ-ра, пойдете? (да/нет):',
    one2: 'Вы пришли на пару! Расположение преподавателя к вам ухудшилось, вас отругали за опаздание и вы не сдали лабораторную работу, придется сдавать ее снова( Следующая пара - физ-ра, пойдете? (да/нет)',
    one3: 'Вы успели на пару и сдали лабораторную, долга нет. Следующая пара - физ-ра, пойдете? (да/нет):',
    teeth: 'Так как вы не почистили зубы сегодня и побежали на пары, у вас заболел зуб! Боль настолько сильна, что терпеть невозможно. Вы решили пойти в ближайшую стоматологию, у вас есть выбор - пойти (в государственную) или (в частную) поликлинику.',
    badTeeth: 'Вы экономите деньги, но зуб вырывают очень больно, вы не будете есть весь день. Вы идете домой.',
    goodTeeth: 'Вы тратите всю стипендию на удаление зуба, но все делается безболезненно. Вы идете домой.',
  };
  const commonQst = {
    loser:'Может оно и к лучшему) Идем дальше!',
    couple_for_home:'В компании Ваших друзей оказалась красивая девушка. Вовремя прогулки вы разговорились и, кажется, нашли общий язык. Вы только собрались домой, но тут встал выбор: пойти домой (домой) или продолжить гулять с девушкой (гулять)...',
    special:'Вы пригласили ее домой...вы хорошо провели вечер.',
    alone:'Вы проводили девушку домой и решили остаться наедине с собой.',
    love:'Вы все-таки решились позвать ее на вечернюю прогулку...Пойдешь домой один (останусь один) или с ней (пойду с ней)?',
    super_study:'Вот это сила! Вы решили не спать всю ночь ради учебы, будет меньше долгов) Но может увеличиться вероятность проспать на следующий день!',
    sleep:'С Вас хватит на сегодня, Вы решили пойти спать, что ж, спокойной ночи!',
    couple:'В компании Ваших друзей оказалась та самая девушка, что вы видели сегодня. В этот раз вы решили узнать друг друга ближе, и, кажется, вы нашли общий язык. Вы только собрались домой, но тут встал выбор: ойти домой (домой) или продолжить гулять с девушкой (гулять)...',
    which_study:'Вы хотите потратить всю ночь на учебу (учеба) или пойти спать (спать)?',
    study:'Вы отдали предпочтение учебе, похвально.',
    walk:'Вы решили пройтись с друзьями по городу.',
    home3:'Из-за того что Вы не убрали за собой мусор, мама, придя с работы ругалась. Заставила учить уроки.',
    phone:'Вам позвонили друзья и позвали на прогулку, пойдете (да/нет)?',
    new_friend:'Вы обменялись номерами и распрощались. Договорились встретиться на выходных.',
    not_a_friend:'Зачем нужны девушки, когда и так полно забот) Вы постояли пару минут и разошлись. Кажется, незнакомка затаила обиду на Вас...',
    tidy:'Хорошо, что Вы убрались, ведь вечером придут родители, был бы бардак - Вам бы влетело!',
    game:'Вы решили поиграть...ладно',
    gim:'Отлично! Вы пошли в зал, провели время с пользой!',
    home2_2:'Какая вкусная еда! Вы вкусно поели и сэкономили время. Время для следующего вопроса.',
    home2_1: 'Как много мы купили! Время для следующего вопроса.',
    mess:'Однако, осталось много мусора после трапезы. Уберемся (убраться) или пойдем играть в игры (играть)?',
    gym:'Пока Вы готовите и едите, время решить, что делать дальше: пойти в зал (в зал) или играть в игры (играть)?',
    home1: 'Вы решили не идти на пары. Вы захотели есть, однако холодильник пустой. Пойдете в магази (магазин) или закажите доставку (доставка)?',
    phsGood: 'Норматив сдан! После физ-ры вы решили пойти в столовую, а затем пойти домой!',
    phsBad: 'Вы упали в обморок! Вас отвели в медпункт, норматив не защитан, но пропуска нет. Пол часа вы просидели в медпункте, вы сходили в столовую, поели, вам легче. Вы решили пойти домой!',
    meeting: 'Вы при выходе с университета встретили девушку, вы улыбнулись ей и не побоялись подойти, ведь ваша ослепительная улыбка дала вам уверенности. У вас завязался диалог, возьмете ее номер (да/нет)?'
  };
  
  const varisntsForEnd = {
    home:'Вы не пошли сегодня на пары, у Вас появился долг по предмету. ',
    uni:'Вы посетили пару и ',
    markBad:'получили плохую оценку. ',
    markGood:'получили хорошую оценку. ',
    phsGoodEnd:'Также Вы сдали норматив по физре, так держать!',
    phsBadEndLoser:'Также Вы заработали пропуск и "неуд" по физкультуре! ',
    phsBadEnd:'Вы не сдали норматив по физ-ре, но хорошо, что Вы попытались, пропуск не заработали! ',
    argue:'За то, что Вы не убрали за собой мусор, мама наругала Вас и испортила настроение. ',
    moneyFalse:'У Вас не осталось денег на личные траты из-за посещения стоматолога.',
    moneyTrue:'Вы пол дня проходили с болью во рту, но к концу дня она отступила, а также остались деньги на свои траты. Здорово! ',
    walk:'Вместе с друзьями вышли на прогулку, что тоже здорово.',
    gym:'Получился продуктивный день за счет посещения зала, круто! Это будет получше физкультуры)',
    girlY:'Даже познакомились с девушкой, возможно, будет продолжение)))',
    girlN:'Однако предпочли вместо того, чтобы прогуляться с симпатичной девушкой, пошли домой, а могли бы неплохо провести вечер)',
    walkNo:'Вместо прогулки с друзьями Вы решили отдать предпочтение учебе и посветили ей оставшийся день.',
  };

const awake = ['проспал', 'встал вовремя'];
const teacher = ['злой', 'добрый'];
let student = {energy: false, money: true, teeth: true, skip: false, mark: false, phsMark: false, home: false, tidy: true, walk: false, girly: false, gym: false};

//function for starting the game
function startGame() {
    reset();
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('final-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('game-screen').style.justifyContent = "center";

}

document.getElementById('start').addEventListener('click', startGame);

const situation = document.getElementById('situation');
const image = document.getElementById('image');
const errorMessage = document.getElementById('error-message');
let randomIndex = Math.floor(Math.random() * awake.length);
let step = 1;
let err = false;
let end = false;

//function for displaying information about physical education
function phsClass() {
  if (!student.skip) {
    if (student.energy) {
      image.src = 'image/sport.jpg';
      situation.textContent = commonQst.phsGood;
      student.phsMark = true;
    } 
    else {
      image.src = 'image/fainting.jpg';
      situation.textContent = commonQst.phsBad;
      student.phsMark = false;
    }
  }
  else{
    student.phsMark = false;
    image.src = 'image/loser.jpg';
    situation.textContent = commonQst.loser;

  }
}

if (randomIndex) {
    situation.textContent = questionsForNotLate.zero;
    image.src = "image/morning.jpg";
}
else {
    situation.textContent = questionsForLate.zero;
    image.src = "image/overslept.jpg";
}

//function for displaying information about studying or walking
function study (){
    if (situation.textContent == commonQst.study || situation.textContent == commonQst.home3){
        if (student.tidy){
            situation.textContent = commonQst.which_study;
        }
        else{
            image.src = 'image/mother.jpg';
            situation.textContent = commonQst.home3;
        }

    }
    else{
        if (!student.home){
            image.src = 'image/couple.jpg';
            situation.textContent = commonQst.couple;
        }
        else{
            image.src = 'image/couple.jpg';
            situation.textContent = commonQst.couple_for_home;

        }
        
    }
}
//function to display meeting information
function girl (){
    image.src = 'image/girl.jpg';
    situation.textContent = commonQst.meeting;
}

//main function
function processAction() {
    const action = document.getElementById('action').value.toLowerCase().trim();
    let randTeacher = Math.floor(Math.random() * teacher.length);
    if (step == 1){
        switch(action){
            case '1':
                if (randomIndex){
                    student.mark = true;
                    student.energy = true;
                    student.home = false;
                    image.src = 'image/good.jpg';
                    situation.textContent = questionsForNotLate.one;
                }
                else{
                    student.teeth = true;
                    student.energy = true;
                    if (randTeacher) {
                        image.src = 'image/good.jpg';
                        situation.textContent = questionsForLate.one1;
                        student.mark = true;
                      } else {
                        image.src = 'image/badteacher.jpg';
                        situation.textContent = questionsForLate.one2;
                        student.mark = false;
                      }
                }
                break;
            case '2':
                if (!randomIndex){
                    student.mark = true;
                    student.teeth = false;
                    student.energy = false;
                    image.src = 'image/good.jpg';
                    situation.textContent = questionsForNotLate.one;
                    
                }
                else{
                    student.mark = false;
                    student.home = true;
                    image.src = 'image/fridge.jpg';
                    situation.textContent = commonQst.home1;
                }
                break;  
            case '3':
                student.mark = false;
                student.home = true;
                image.src = 'image/fridge.jpg';
                situation.textContent = commonQst.home1;
                break;
            default:
                err = true;
                break;
            }
        step += 1;
    }
    else if (step == 2 && !student.home){
        switch(action){
            case 'да':
                phsClass();
                break;
            case 'нет':
                student.skip = true;
                phsClass();
                break;
            default:
                err = true;
                break;
            }
            step += 1;
    }
    else if (step == 2 && student.home){
        switch(action){
            case 'доставка':
                image.src = 'image/delivery.jpg';
                situation.textContent = commonQst.home2_2;
                break;
            case 'магазин':
                image.src = 'image/shop.jpg';
                situation.textContent = commonQst.home2_1;
                break;
            default:
                err = true;
                break;
            }
            step += 1;
    }
    else if (step == 3 && student.home){
        if (action == 'следующий вопрос'){
            if (situation.textContent == commonQst.home2_1){
                image.src = 'image/choice.jpg';
                situation.textContent = commonQst.gym;
            }
            else{
                image.src = 'image/mess.jpg';
                situation.textContent = commonQst.mess;
            }
        }
        else{
            err = true;
        }
            step += 1;
    }
    else if (step == 4 && student.home){
        switch(action){
            case 'убраться':
                image.src = 'image/tidy.jpg';
                situation.textContent = commonQst.tidy;
                break;
            case 'играть':
                if (situation.textContent == commonQst.mess){
                    student.tidy = false;
                }
                image.src = 'image/game.jpg';
                situation.textContent = commonQst.game;
                break;
            case 'в зал':
                student.gym = true;
                image.src = 'image/gym.jpg';
                situation.textContent = commonQst.gim;
                break;
            default:
                err = true;
                break;
        }
        step += 1;
    }     
    else if (step == 3 && !student.home){
        if (action == 'следующий вопрос'){
            if (!student.teeth){
                image.src = 'image/teethpain.jpg';
                situation.textContent = questionsForLate.teeth;
                }
            else{
                girl();
                }
        }
        else{
            err = true; 
        }
        step += 1;
    }
    else if (step == 4 && !student.home){
        switch(action){
            case 'в государственную':
                image.src = 'image/badentist.jpg';
                situation.textContent = questionsForLate.badTeeth;
                break;
            case 'в частную':
                image.src = 'image/goodentist.jpg';
                situation.textContent = questionsForLate.goodTeeth;
                break;
            case 'нет':
                image.src = 'image/notfriend.jpg';
                situation.textContent = commonQst.not_a_friend;
                break;
            case 'да':
                image.src = 'image/newfriend.jpg';
                situation.textContent = commonQst.new_friend;
                break;
            default:
                err = true;
                break;
            }
            step += 1;
    }
    else if (step == 5){
        if (action == 'следующий вопрос'){
            image.src = 'image/call.jpg';
            situation.textContent = commonQst.phone;
                }
            else{
                err = true;
                }
            step += 1;
        }
    else if (step == 6){
        switch(action){
            case 'да':
                image.src = 'image/walk.jpg';
                student.walk = true;
                situation.textContent = commonQst.walk;
                break;
            case 'нет':
                image.src = 'image/study.jpg';
                situation.textContent = commonQst.study;
                break;
            default:
                err = true;
                break;
            }
        step += 1;
    }
    else if (step == 7){
        if (action == 'следующий вопрос'){
            study();
        }
        else{
            err = true;
        }
        step += 1;
    }
    else if (step == 8){
        switch(action){
            case 'следующий вопрос':
                student.tidy = true;
                step -= 1;
                study();
                break;
            case 'спать':
                image.src = 'image/sleep.jpg';
                situation.textContent = commonQst.sleep;
                end = true;
                break;
            case 'учеба':
                image.src = 'image/studynight.jpg';
                situation.textContent = commonQst.super_study;
                end = true;
                break;
            case 'домой':
                image.src = 'image/study.jpg';
                situation.textContent = commonQst.study;
                step -= 1;
                break;
            case 'гулять':
                student.girly = true;
                image.src = 'image/love.jpg';
                situation.textContent = commonQst.love;
                break;
            default:
                err = true;
                break;
            }
        step += 1;
    }
    else if (step == 9){
        if (action == 'останусь один'){
            image.src = 'image/alone.jpg';
            situation.textContent = commonQst.alone;
            end = true;
        }
        else if (action == 'пойду с ней'){
            image.src = 'image/xxx.jpg';
            situation.textContent = commonQst.special;
            end = true;
        }
        else{
            err = true;
        }
    step += 1;
    }
        if (err){
            errorMessage.textContent = 'Неправильный ввод!';
            document.getElementById('action').classList.add('error-input');
            err = false;
            step -= 1;  
        } 
    }

document.getElementById('submit').addEventListener('click', processAction);
 
//function to go to the final screen
function endScreen(){
    let res = '';
    document.getElementById('final-screen').style.display = 'block';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('final-screen').style.justifyContent = "center";
    if (student.home){
        res += varisntsForEnd.home;
        if (student.gym){
            res += varisntsForEnd.gym;
        }
        if (student.mess){
            res += varisntsForEnd.argue;
        }
    }
    else{
        res += varisntsForEnd.uni;
        if (student.mark){
            res += varisntsForEnd.markGood;
        }
        else{
            res += varisntsForEnd.markBad;
        }
        if (student.skip){
            res += varisntsForEnd.phsBadEndLoser;
        }
        else{
            if (student.phsMark){
                res += varisntsForEnd.phsGoodEnd;
            }
            else{
                res += varisntsForEnd.phsBadEnd;
            }
        }
        if (!student.teeth){
            if (student.money){
                res += varisntsForEnd.moneyTrue;
            }
            else{
                res += varisntsForEnd.moneyFalse;
            }
        }
    }
    if (student.walk){
        res += varisntsForEnd.walk;
        if (student.girly){
            res += varisntsForEnd.girlY;
        }
        else{
            res += varisntsForEnd.girlN;
        }
    }
    else{
        res += varisntsForEnd.walkNo;
    }
    const textbox = document.getElementById("textbox");
    textbox.style.display = 'flex';
    textbox.style.flexDirection = 'column';
    textbox.style.border = "4px solid blue";
    textbox.style.padding = "10px";
    textbox.style.backgroundColor = 'pink'; 
    textbox.style.margin = "50px 50px 50px 50px";
    textbox.innerText = res;
    textbox.style.alignItems = 'center';
    textbox.style.justifyContent = 'center';
    textbox.style.textAlign = 'center';
    const width = textbox.offsetWidth;
    const height = textbox.offsetHeight;
    textbox.style.width = width + "px";
    textbox.style.height = height + "px";
}

//function to restart the program
function reset(){
    student.energy = false;
    student.money = true;
    student.teeth = true;
    student.skip = false;
    student.mark = false;
    student.phsMark = false;
    student.home = false; 
    student.tidy = true;
    student.walk = false;
    student.girly = false;
    student.gym = false;
    randomIndex = Math.floor(Math.random() * awake.length);
    step = 1;
    err = false;
    end = false;
    document.getElementById('submit').style.display = 'block';
    document.getElementById('end').style.display = 'none';
    if (randomIndex) {
        situation.textContent = questionsForNotLate.zero;
        image.src = "image/morning.jpg";
    }
    else {
        situation.textContent = questionsForLate.zero;
        image.src = "image/overslept.jpg";
    }
}

document.getElementById('action').addEventListener('input', function() {
    errorMessage.textContent = '';
    document.getElementById('action').classList.remove('error-input');
});
document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('action').value = '';
    if (end){
        document.getElementById('submit').style.display = 'none';
        document.getElementById('end').style.display = 'block';
    }
});
document.getElementById('end').addEventListener('click', endScreen);
document.getElementById('restart').addEventListener('click', startGame);