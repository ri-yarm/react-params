import React from "react";
import { Param } from "../../App.tsx";

interface ParamValue {
  paramId: number;
  value: string;
}

// предположим
type Color = string;

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  editedParams: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editedParams: [...props.model.paramValues],
    };
  }

  handleParamChange = (paramId: number, value: string) => {
    const { editedParams } = this.state;
    const updatedParams = editedParams.map((param) =>
      param.paramId === paramId ? { ...param, value } : param,
    );
    this.setState({ editedParams: updatedParams });
  };

  getModel = (): Model => {
    const { editedParams } = this.state;
    return {
      paramValues: editedParams,
      colors: this.props.model.colors,
    };
  };

  render() {
    const { params } = this.props;
    const { editedParams } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}:</label>
            <input
              type="text"
              value={
                editedParams.find((p) => p.paramId === param.id)?.value || ""
              }
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;
