const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    ekstrakurikuler: {
        type: String,
        required: [true, 'Silahkan isikan nama ekstrakurikuler'],
        
    },
    gurupengawas: {
        type: String,
        required: [true, 'Silahkan isikan nama guru'],   
    },
    jumlahsiswa: {
        type: String,
        required: [true, 'Silahkan isikan jumlah siswa'],   
    },
    jadwal: {
        type: String,
        required: [true, 'Silahkan isikan jadwal pelaksanaan'],   
    },
    ruangan: {
        type: String,
        required: [true, 'Silahkan isikan ruangan kegiatan'],   
    }
        
    
})

module.exports = mongoose.model('User', UserSchema)