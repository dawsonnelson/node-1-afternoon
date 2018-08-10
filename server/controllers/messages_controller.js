
let messg = [];
let id = 0;

module.exports = {

    create: (req, res) => {
        const { text, time } = req.body
        id++
        messg.push({ text, time, id})
        res.status(200).send(messg)
    },

    read: (req, res) => {
        res.status(200).send(messg);

    },

    update: (req, res) => {
        const{text} = req.body
        const updateID = req.params.id;

        let messgIndex = messg.findIndex( messg => messg.id == updateID );

        let messg = messg[messgIndex];

        messg[messgIndex] = {
            id: messg.id,
            text: text || messg.text,
            time: messg.time

        };

        res.status(200).send(messages);


    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        messgIndex = messg.findIndex( messg => messg.id == deleteID);
        messg.splice(messgIndex, 1);
        res.status(200).send( messages );
    }
};