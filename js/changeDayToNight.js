function carregar() {
    
    let date = new Date()

    let getHours = date.getHours()
    let header = document.getElementById('header')
    
    if (getHours >= 0 && getHours < 6){

        // MADRUGADA
        
        if (header.classList.contains("backgroundDay")) {
            
            header.classList.remove('backgroundDay')

        }
        
        if (!header.classList.contains("backgroundNight")) {
            
            header.classList.add('backgroundNight')

        }
    
    } else if (getHours >= 6 && getHours < 12) {

        // MANHÂ
    
        if (header.classList.contains("backgroundNight")) {
            
            header.classList.remove('backgroundNight')

        }
        
        if (!header.classList.contains("backgroundDay")) {
            
            header.classList.add('backgroundDay')

        }
    
    } else if (getHours >= 12 && getHours < 18) {

        // TARDE
    
        if (header.classList.contains("backgroundNight")) {
            
            header.classList.remove('backgroundNight')

        }
        
        if (!header.classList.contains("backgroundDay")) {
            
            header.classList.add('backgroundDay')

        }
    
    } else if (getHours >= 18 && getHours <= 23) {

        // NOITE
    
        if (header.classList.contains("backgroundDay")) {
            
            header.classList.remove('backgroundDay')

        }
        
        if (!header.classList.contains("backgroundNight")) {
            
            header.classList.add('backgroundNight')

        }
    
    }

}
