const startButton = document.getElementById('startButton');
const remoteVideo = document.getElementById('remoteVideo');

startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        remoteVideo.srcObject = stream;
    } catch (error) {
        console.error('Erro ao acessar a tela:', error);
    }
});
