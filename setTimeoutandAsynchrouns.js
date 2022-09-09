
    rice = [
            { types: {food:'VEG BIRIYANI',price:100},
            {food:'TAMARIND RICE',price:200}, 'COCONUT RICE',price, 'MANGO RICE', 'PUTHINA RICE', 'LIME RICE', 'CURD RICE', 'SAMBAR RICE'] },
            { option1: ['quantity for 1 person', 'quantity for 2 person'] },
            { option2: ['with spices', 'without spices'] },
            { option3: ['with pickle', 'without pickle'] },
            { option4: ['with side dish', 'without side dish'] },
            { option5: ['take away', 'eat here'] },
            { option6: ['do you want dessert', 'not want dessert'] },
    

    ]
        name = prompt('HELLO WELCOME TO  \n enter your name ')
        function findElmentBySearchId(search, searchPlace) {
            arr2 = []
            searchPlace[0].forEach((n) => { if (n == search) { arr2.push(n) } })
            return arr2
        }




        function checkingInListorNot(functionName) {
            d = functionName
            if (d.length > 0) {
                return d
            }
            else {
                return 0
            }
        }



        answer = []
        for (i = 0; i < rice.length; i++) {
            anw = prompt(Object.values(rice[i]), "enter choice below ")
            answer.push(checkingInListorNot(findElmentBySearchId(anw, Object.values(rice[i]))))
        }

        

        document.write("ok order received!! \n")
        id = Math.floor(Math.random() * 100)
        orderid = name.slice(0, 3) + id


        setTimeout(() => {
            document.write('cutting veg\n')
            setTimeout(() => {
                document.write('boiling rice\n')
                setTimeout(() => {
                    document.write("frying vegitable\n")
                    setTimeout(() => { document.write("your order is ready\n") },3000)
                }, 3000)
            }, 2000)
        }, 4000)
        
       
        if(answer[0].length !=0){
            document.write('Youre order is  : \n',answer[0])
            document.write('Order Id is  :  \n', orderid)}
            else{
                document.write('Kindly Check the Dish name')
            }
