
var saller = {
    name : "Вероника Ростова" ,
    profession:"Менеджер по продажам",
    about: "Подберу для вас самые лучшие предложения.Мои услуги абсолютно бесплатны",
    photo: "img/sallerPhoto1.png",
    services:[
                {label:"Ручное бронирование",done:11},
                {label:"Пакетные туры",done:3},
                {label:"Отели",done:1} 
            ],
    share:14,
    like:131,
    commentators: [
            {
                name:"Самуил",
                date:"13 октября 2011",
                comment: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!" 
            },
            {
                name:"Лилия Семёновна",
                date:"14 октября 2011",
                comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?" 
            },
            {
                name:"Лилия Семёновна",
                date:"14 октября 2011",
                comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?" 
            }

        ]
    }

 offerPageApp.controller("sallerCtr",function($scope){
     $scope.saller = saller;
     $scope.saller.sumServicesDone = function () {
        return  $scope.saller.services.reduce(function(red,el){
             red = (typeof red === "number") ? red : red.done;
             return red+el.done;
         })
     }
     $scope.saller.getMaxVal = function (listValue,key) {
         var maxVal=0;   
         var i =0;
         while(listValue[i]) {
             maxVal = ( maxVal > listValue[i][key] ) ? maxVal:listValue[i][key];
             i++;
         }
         return maxVal;
     }
     $scope.saller.isMax = function(value,listValue,key) {
         if( !key ) {
             return (value === Math.max.apply( null,listValue ));
         } 
             return  value === $scope.saller.getMaxVal(listValue,key); 
     }
     
     $scope.saller.setProgressBar = function(value,listValue,key) {
         if( $scope.saller.isMax(value,listValue,key) ) {
              return "100";
         } 
        return  value*100/$scope.saller.getMaxVal(listValue,key);
         
     }
         $scope.saller.setProgressBarBackground = function() {
        var color="";
        var i = 3;
        while(i){
            color+=Math.round(Math.random()*(99-0)*1);
            color+=(i>1)?",":"";
            --i;
        }
        return "rgb("+color+")";
         
     }
     $scope.saller.getDateComment = function() {
         return new Date().toLocaleString('ru', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                            });
    }
     $scope.saller.addCommentators = function () {
          if( !$scope.newComments ) {
              return;
          }    
          $scope.saller.commentators.push({
               name:"anonym",
               date:$scope.saller.getDateComment(),
               comment:$scope.newComments
                                        })
          $scope.newComments = "";
     }
     
     $scope.addCommentWithCntrEnt = function(event) {
          if((event.ctrlKey) &&(event.keyCode === 13)) {
               $scope.saller.addCommentators();
             }
     }  
 })


