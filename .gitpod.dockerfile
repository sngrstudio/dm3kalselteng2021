FROM gitpod/workspace-full

RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash \ 
    sudo apt install git-lfs=2.13.3 -y \
    npm install -g netlify-cli