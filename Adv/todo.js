let todos = [];
        function addToDo(){
            const input = document.querySelector("input");
            if (input.value.trim() === "") 
            return invalidInput();

            todos.push({
                title: input.value
            })
            render();
        }

        function deleteTodoComponent(index){
            todos.splice(index, 1)
            render()
        }

        function createTodoComponent(todo, index){
                const div = document.createElement("div");
                const h1 = document.createElement("h1");
                const button = document.createElement("button");
                button.innerHTML = "Delete";
                button.onclick = function() {
                    deleteTodoComponent(index);
                };
                h1.innerHTML = todo.title;
                div.append(h1);
                div.append(button);
                return div;
        }

        function render(){
            document.querySelector("#todos").innerHTML = "";
            for(let i = 0; i < todos.length; i++){
                const element = createTodoComponent(todos[i], i);
                document.querySelector("#todos").appendChild(element);
            }
        }

        function invalidInput(){
            const div = document.createElement("div");
            div.innerHTML = "Invalid Input!!";
            div.style.color = 'red';
            document.querySelector("body").appendChild(div);
            document.querySelector("input").style.borderColor = "red";
        }
