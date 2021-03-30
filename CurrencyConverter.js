
        var gbp, usd, eur, cad, aud,inr;
        function init()
        {
            usd = document.getElementById("USD");
            eur = document.getElementById("EUR");
            aud = document.getElementById("AUD");
            inr = document.getElementById("INR");
        }
        function inrfunc()
        {
            eur.value = parseFloat(inr.value) * 0.011;
            aud.value = parseFloat(inr.value) *  0.018;
            usd.value = parseFloat(inr.value) * 0.014;
        }
        
        
        function eurfunc()
        {
            usd.value = parseFloat(eur.value) * 1.20;
            aud.value = parseFloat(eur.value) * 1.54;
            inr.value = parseFloat(eur.value) * 87.65;
        }
        
        function audfunc()
        {
            
            usd.value = parseFloat(aud.value) * 0.78;
            eur.value = parseFloat(aud.value) * 0.65;
            inr.value = parseFloat(aud.value) * 56.76;    
        }
        
        function usdfunc()
        {
            eur.value = parseFloat(usd.value) * 0.83;
            aud.value = parseFloat(usd.value) * 1.28;
            inr.value = parseFloat(usd.value) * 72.72;
        }
       
        
        init();
    