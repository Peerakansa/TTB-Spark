
### Install Node.js and NPM
- Install homebrew (if you didn't install before) via Terminal  
` /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
  
- if you already installed, update brew for up-to-date  
` brew update `

- Then, install node  
` brew install node `

- Check node and npm installed already  
` node -v` or  
` npm -v`

### How to execute No.1
1. Go to terminal
2. run ` node tests/1.test.js` 

### How to execute No.2
1. Go to terminal
2. run ` npx playwright test 'tests/2.test.js' ` 

### How to execute No.3
1. Go to terminal
2. run ` npx playwright test 'tests/3.test.js' ` 

### How to execute No.6
1. Go to terminal
2. run `python3 'tests/6.py' `