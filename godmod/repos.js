"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "📔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/malvinking/GODMOD-MD;
const img = 'https://telegra.ph/file/cb63e379b1aec8bdf7350.jpg';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login,
               
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

const gitdata = ` 😊Hello,I AM GODMOD MD, A Multidevice Whatsapp User Bot with amazing features.

*FORK AND GIVE A STAR 🌟 TO OUR RESPIRATORY* 


❒⁠⁠⁠⁠ *STARS*: ${repoInfo.stars} 
❒⁠⁠⁠⁠ *FORKS*: ${repoInfo.forks} 
❒⁠⁠⁠⁠ *RELEASE*: ${releaseDate}
❒⁠⁠⁠⁠ *Repo*: ${data.html_url}
❒⁠⁠⁠⁠ *UPDATE ON*: ${repoInfo.lastUpdate}
❒⁠⁠⁠⁠ *VISIT FOR TUTORIAL👇* : 
❒⁠⁠⁠⁠ *_youtube.com/@IMORTALMD_*
❒⁠⁠⁠⁠ *DEVELOPER*: *GODMOD 𝐓𝐄𝐂𝐇*
__________________________________
  ◆Made on Earth by GODMOD tech◆`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /*let z = 'Hello This is  *FLASH-MD* \n\n ' + "The Following is *FLASH-MD Repo.*";
    let d = './Sprinter';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
