# heroku-site
GitHub repository for my Heroku site.

# Instructions on Running
This uses npm version `16.13.2`
1. Download anaconda/miniconda if you haven't already
2. `conda env create -f environment.yml`
3. Find the path to the flask.exe in your newfound environment. Place that path in the "server" script under frontend/package.json
4. `cd frontend`
5. `npm install`
6. In one terminal, run `npm start`
7. In another terminal, run `npm run server`
