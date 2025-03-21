        // Update current time
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById('current-time').textContent = timeString;
            
            // Update current date
            let time = new Date(2025, 2, 28);  
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateString = time.toLocaleDateString(undefined, options);
            document.getElementById('event-date').textContent = dateString;
        }
        
        // Set Iftar time - for March 28, 2025
        const iftarTime = new Date(2025, 2, 28, 18, 30, 0); // Month is 0-indexed, so 2 = March
        
        // Update countdown
        function updateCountdown() {
            const now = new Date();
            
            // If current time is past iftar time, set countdown to 0
            if (now > iftarTime) {
                document.getElementById('countdown').textContent = "It's Iftar time!";
                return;
            }
            
            let diff = iftarTime - now;
            
            // Calculate days, hours, minutes
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            // Display countdown in days, hours, minutes format
            document.getElementById('countdown').textContent = 
                `${days} day${days !== 1 ? 's' : ''}, ${hours} hour${hours !== 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
        
        updateTime();
        updateCountdown();
        setInterval(updateTime, 1000);
        setInterval(updateCountdown, 60000);
        updateCountdown();