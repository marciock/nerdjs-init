const sh=require('shelljs');
const proc=require('child_process');
const fs=require('fs');

proc.execSync('npm init',{stdio:'inherit'});
//sh.exec('npm install');
proc.execSync('npm install',{stdio:'inherit'});
proc.execSync('npm install --save-dev ../nerdjs-config',{stdio:'inherit'});
proc.execSync('npm install --save-dev @webcomponents/custom-elements',{stdio:'inherit'});
proc.execSync('npm install --save-dev babel-core',{stdio:'inherit'});
proc.execSync('npm install --save-dev babel-loader',{stdio:'inherit'});
proc.execSync('npm install --save-dev babel-plugin-transform-custom-element-classes',{stdio:'inherit'});
proc.execSync('npm install --save-dev babel-polyfill',{stdio:'inherit'});
proc.execSync('npm install --save-dev  babel-preset-es2015@6.24.1',{stdio:'inherit'});
//proc.execSync('npm install --save-dev babel-preset-env',{stdio:'inherit'});
proc.execSync('npm install --save-dev webpack',{stdio:'inherit'});
proc.execSync('npm install --save-dev webpack-cli',{stdio:'inherit'});
proc.execSync('npm install --save-dev webpack-dev-server',{stdio:'inherit'});


fs.readFile('package.json',(err,data)=>{
    let jsonData=data;
    let jsonParse=JSON.parse(jsonData);
    jsonParse.scripts['start']='webpack-dev-server --mode development --watch';
    jsonParse.scripts['watch']='webpack --watch';
    jsonParse.scripts['dev']='webpack --mode development';
    jsonParse.scripts['build']='webpack --mode production';
    console.log(jsonParse.scripts);

   // jsonParse.devDependencies['@webcomponents/custom-elements']='github:webcomponents/custom-elements';
   /* jsonParse.devDependencies['babel-core']='^6.26.0';
    jsonParse.devDependencies['babel-loader']='^7.1.4';
    jsonParse.devDependencies['babel-plugin-transform-custom-element-classes']='^0.1.0';
    jsonParse.devDependencies['babel-polyfill']='^6.26.0';
    jsonParse.devDependencies['babel-preset-env']='^1.6.1';
    jsonParse.devDependencies['webpack']='^4.6.0';
    jsonParse.devDependencies['webpack-cli']='^2.0.15';
    jsonParse.devDependencies['webpack-dev-server']='^3.1.3';

*/
    let jsonStringify=JSON.stringify(jsonParse);

    fs.writeFile('package.json',jsonStringify);

    

})




//////proc.execSync('npm install --save ../nerdjs-creator',{stdio:'inherit'});

// /babel-core babel-loader babel-plugin-transform-custom-element-classes babel-polyfill babel-preset-env webpack webpack-cli webpack-dev-server



sh.cp('./node_modules/nerdjs-config/dist/webpack.config.js','./webpack.config.js');

sh.mkdir('dist');
//sh.cd('./lib');
sh.cp('./node_modules/nerdjs-config/dist/nerdbinds.js','./dist/nerdbinds.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdhttp.js','./dist/nerdhttp.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdrouter.js','./dist/nerdrouter.js');
sh.cp('./node_modules/nerdjs-config/dist/nerdcreator.js','./dist/nerdcreator.js');
//sh.cd('..');
sh.mkdir('src');
sh.cd('src');
sh.cp('../node_modules/nerdjs-config/dist/app.js','./app.js');
sh.cd('..');
sh.mkdir('public');
sh.cd('public');
//sh.touch('index.html');
sh.cp('../node_modules/nerdjs-config/dist/index.html','./index.html');


sh.cd('..');
//sh.cp('../node_modules/nerdjs-config/dist/webpack','./index.js');
proc.execSync('npm install',{stdio:'inherit'});