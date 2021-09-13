FROM gitpod/workspace-full

RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash && \ 
    wget https://github.com/netlify/netlify-credential-helper/releases/download/v0.1.10/git-credential-netlify-linux-amd64.deb && \
    sudo apt install git-lfs=2.13.3 ./git-credential-netlify-linux-amd64.deb -y && \
    npm install -g netlify-cli