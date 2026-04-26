document.getElementById("searchBtn").addEventListener("click", () =>{
    const username = document.getElementById("usename").ariaValueMax.trim();
    const resultDiv = document.getElementById("result");
    if(!username) {
        resultDiv.innerHTML = "<p>ユーザー名を入力してください。</p>";
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (!res.ok) throw new Error("ユーザーが見つかりませんでした。");
            return res.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
            <p>ユーザー名：${data.login}</p>
            <p>名前：${data.name}</p>
            <p>フォロワー数：${data.followers}</p>
            <p>公開リポジトリ数：${data.public_repos}</p>
            <img src="${data.avatar_url}" width="100" alt="アイコン画像"/>
            `;
        })
        .catch(err => {
            resultDiv.innerHTML = `<p style="color:red;">${err.message}</p>`;
        });
});