        //North American Teams


        let Cloud9 = []
        let hundredThieves = []
        let evilGeniuses = []
        let sentinels = []
        let NRG = []
            //Latin American Teams
        let LOUD = []
        let Furia = []
        let MIBR = []
        let KRUesports = []
        let Leviatan = []
        

    //List of T1 teams and their current rosters
    //North American Teams
    
        fetch('https://vlrggapi2.vercel.app/stats/all/30')
            .then(res => {
                return res.json();
              })
            .then(data => { 
                data.data.segments.forEach(player => { //Adding players into their respective rosters
                  switch (player.org !== String){
    /*North American Teams*/
                    case player.org === 'C9':
                        Cloud9.push(player)
                        break;
                    case player.org === 'SEN':
                        sentinels.push(player)
                        break;
                    case player.org === '100T':
                        hundredThieves.push(player)
                        break;
                    case player.org === 'EG': //Currently a 6man roster, double check if other players need to be added
                        evilGeniuses.push(player)
                        break;
                    case player.org === 'NRG': //Needs to ADD player: s0m
                        NRG.push(player)
                        break;
    /*Latin American Teams*/
                    case player.org === 'MIBR': 
                        MIBR.push(player)
                        break;
                    case player.org === 'LEV':
                        Leviatan.push(player)
                        break;
                    case player.org === 'LOUD':
                        LOUD.push(player)
                        break;
                    case player.org === 'FUR':
                        Furia.push(player)
                        break;
                    case player.org === 'KRÜ':
                        KRUesports.push(player)
                        break;
                  }   
              });
            
              console.log(Cloud9,sentinels,hundredThieves,evilGeniuses,NRG,MIBR,Leviatan,LOUD,Furia,KRUesports)
            })
            .then(() => createTable(Cloud9))
            .catch(error => console.log(error));
    
        //Allocating above arrays into HTML table


        function createTable(data) {
            let table = document.getElementById('standardTable')
    
            for (let i = 0; i < data.length; i++) {
                let row = `
                <tr>
                    <td>${data[i].player}</td>
                    <td>${data[i].org}</td>
                    <td>${data[i].average_combat_score}</td>
                    <td>${data[i].clutch_success_percentage}</td>
                </tr>
                `
                table.innerHTML += row
            }
        }
        



    