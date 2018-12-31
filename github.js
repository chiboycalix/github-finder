//create github class
class Github{
    constructor(){
        this.client_id = '376ca72ff7e3ac498bcb';
        this.client_Secret = '79045a5b3c89b1c1c3445c4e6621cf773fc525ed';
        this.repo_count = 5;
        this.repo_sort = 'created: asc'
    }
    //get user function

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_Secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_Secret}`)
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}