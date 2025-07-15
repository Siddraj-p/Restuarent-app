import {useEffect} from 'react'

const Emojireview = () => {

    useEffect(() => {
        const canvas = document.getElementById('emojiCanvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '50px Arial';
        ctx.fillText('😄', 50, 100);
        ctx.fillText('😐', 150, 100);
        ctx.fillText('😞', 250, 100);

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;

            if (x < 100) alert('Thank you for your Happy review!');
            else if (x < 200) alert('Thanks for Neutral feedback!');
            else alert('Sorry to hear that, Sad review noted.');
        });
    }, []);

    return (
        <div className="emoji-review" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>How was your experience?</h2>
            <canvas id="emojiCanvas" width="400" height="150" style={{ border: '1px solid black' }}></canvas>
        </div>
    );

}
export default Emojireview;

  
// )}
