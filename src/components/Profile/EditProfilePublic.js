import React from 'react';

class EditProfilePublic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedFileImageProfile: null,
            data:null,
            selectedFileImageHeader: null
          
         }      
    }


    onChangeHandlerImageProfile=event=>{
           let  selectedFileImageProfile =new FormData();
           let data =event.target.files[0]
           selectedFileImageProfile.append('file', data)
           console.log(selectedFileImageProfile)
        this.setState({
            selectedFileImageProfile,
          }) 
    }

    onChangeHandlerImageHeader=event=>{
console.log(this.state.selectedFileImageProfile)
        this.setState({
            selectedFileImageHeader: event.target.files[0],
            loaded: 0,
          })

          console.log(this.state.selectedFileImageProfile)      
    }
    render() { 
        return ( 
        <div>
            <div>
                <form>
                <div>
                <h3>Email</h3>
                <span>Mantenha esse email atualizado pois ele é o canal de comunicação entre voce, a equipe do Inovation Dreams e a equipe das ideias que você apoiou.</span>
                <div>{this.props.email}</div> <span>Alterar email</span>
                </div>

                <div>
                    <h3>Nome no perfil público</h3>
                    <span>Esse é o nome que os usuários irão ver no seu perfil.</span>
                    <input 
                     type="text"
                     value={this.state.description}
                     onChange={this.onDescriptionChange}
                    ></input>


                </div>
                <div>
                    <h3>Imagem do perfil público</h3>
                    <span>Essa imagem será utilizada como a miniatura de seu perfil (PNG, JPG tamanho 280 x 280)</span>
                    <input type="file" name="file" onChange={this.onChangeHandlerImageProfile}/>
                </div>
                <div>
                <h3>Imagem de capa do perfil</h3>
                    <span>Essa imagem será utilizada como fundo do cabeçalho do seu perfil público (PNG ou JPG). Caso você não envie nenhum imagem aqui, utilizaremos sua imagem de perfil como alternativa.</span>
                    <input type="file" name="file"  onChange={this.onChangeHandlerImageHeader}/>
                </div>

                <div>

                </div>

                </form>
            </div>
        </div> );
    }
}
 
export default EditProfilePublic;