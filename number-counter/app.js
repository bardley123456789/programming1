let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {

    btn.addEventListener('click', function(e) {
        document.getElementById('dissapear').innerHTML=" ";
        const styles = e.currentTarget.classList;
    if(styles.contains('minusten')){
            count = count - 10;
    } else if(styles.contains('decrease')){
        count--;
    } else if(styles.contains('increase')){
        count++;
    } else if(styles.contains('plusten')){
        count = count + 10;
    } else{
      count = 0;  
    }

    if(count > 0){
        value.style.color = "green";
    }
    if(count < 0){
        value.style.color = "red";
    }
    if(count === 0){
        value.style.color = "#222";
    }

    value.textContent = count;
    });
});


