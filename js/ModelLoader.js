const fileInput = document.getElementById('file-input');
const fileReader = new FileReader();

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    TRIANGLES = [];

    fileReader.onload = (event) => {
        const fileText = event.target.result;
        const lines = fileText.split('\n');

        let VERTICES = [];

        lines.forEach((line) => {
            let values = line.split(' ');
            switch(values[0]) {
                case 'v': {
                    VERTICES.push(new Vector3f(values[1], values[2], values[3]));
                    break;
                }
                case 'f': {
                    let index1 = values[1].split('/')[0];
                    let index2 = values[2].split('/')[0];
                    let index3 = values[3].split('/')[0];
                    TRIANGLES.push(new Triangle(VERTICES[index1 - 1], VERTICES[index2 - 1], VERTICES[index3 - 1]));
                    break;
                }
            }
        });
    }

    fileReader.readAsText(file);
});