import React, { useEffect, useRef } from 'react';

const config: Partial<LogicFlow.Options> = {
  isSilentMode: false,
  stopScrollGraph: true,
  stopZoomGraph: true,
};

const data = {
  nodes: [
    {
      id: '1',
      type: 'customIcon',
      x: 150,
      y: 100,
      text: '心形❤',
      properties: {
        width: 80,
        height: 80,
        style: {
          fill: '#d75a4a',
          stroke: '#9254de',
          path: 'M 39.7599939046071 14.139130434782608 C 42.99207598923147 5.808695652173912 50.36826332097323 0 58.944481129679474 0 C 70.49677452125768 0 78.83298623457102 10.74782608695652 79.87301264794026 23.54782608695652 C 79.87301264794026 23.54782608695652 80.43302687052369 26.730434782608697 79.20099558084013 32.45217391304348 C 77.5049525067303 40.243478260869566 73.5208513232082 47.18260869565217 68.16071519276679 52.469565217391306 L 39.7599939046071 80 L 11.839284807233199 52.452173913043474 C 6.47914867679179 47.18260869565217 2.49504749326967 40.243478260869566 0.7990044191598517 32.45217391304348 C -0.43302687052369576 26.730434782608697 0.12698735205973488 23.54782608695652 0.12698735205973488 23.54782608695652 C 1.167013765428963 10.74782608695652 9.503225478742316 0 21.055518870320512 0 C 29.631736679026766 0 36.52791181998273 5.808695652173912 39.7599939046071 14.139130434782608 Z',
        },
      },
    },
    {
      id: '2',
      type: 'customIcon',
      x: 350,
      y: 100,
      text: '星星✨',
      properties: {
        width: 80,
        height: 80,
        style: {
          fill: '#ed8a19',
          stroke: '#9254de',
          path: 'M 43.86933445808668 2.512856514404972 L 52.8801968616723 21.621036259359443 C 53.51429458636906 22.94726608640651 54.732429689076 23.872136886847233 56.134119396300434 24.08154159638098 L 76.3084391109949 27.15281066954261 C 79.84603694351371 27.69377283583813 81.24772665073813 32.23087487573599 78.69464896972221 34.830983352446694 L 64.09371451946772 49.71616812180392 C 63.07582080350713 50.76319166947266 62.608590901099 52.24647502867004 62.85889263453193 53.71230799540627 L 66.29636977367754 74.72258051862562 C 66.8970939339166 78.40461332792735 63.20931506133804 81.21412651417181 60.05551322008307 79.46908726805725 L 42.00041484845411 69.55726435012652 C 40.74890618128944 68.85924865168069 39.247095780691836 68.85924865168069 37.995587113527165 69.55726435012652 L 19.940488741898204 79.46908726805725 C 16.786686900643236 81.21412651417181 13.098908028064676 78.40461332792735 13.69963218830372 74.72258051862562 L 17.137109327449345 53.71230799540627 C 17.38741106088228 52.24647502867004 16.920181158474136 50.74574127701151 15.902287442513536 49.71616812180392 L 1.3013529922590603 34.830983352446694 C -1.2517246887568652 32.23087487573599 0.16665180069642677 27.69377283583813 3.6875628509863634 27.15281066954261 L 23.861882565680837 24.08154159638098 C 25.280259055134128 23.872136886847233 26.481707375612206 22.94726608640651 27.115805100308975 21.621036259359443 L 36.143354286123454 2.512856514404972 C 37.71191181563651 -0.8376188381349908 42.28409014634477 -0.8376188381349908 43.86933445808668 2.512856514404972 Z',
        },
      },
    },
    {
      id: '3',
      type: 'customIcon',
      x: 550,
      y: 100,
      text: '星星✨',
      properties: {
        width: 80,
        height: 80,
        style: {
          fill: '#eb2f96',
          stroke: '#9254de',
          path: 'M 79.45600000000002 0.36341192933293687 C 79.12 0.08649114358208143 78.656 -0.044681860194639565 78.19200000000001 0.013617252595014213 L 28.592 5.858103309757805 C 27.808 5.945551978942286 27.200000000000003 6.572267441431064 27.200000000000003 7.301006351301736 L 27.200000000000003 16.075022826144632 L 27.200000000000003 22.211004447255693 L 27.200000000000003 60.14915209512289 C 24.432000000000002 57.248771233837616 20.096000000000004 55.38319962456869 15.200000000000001 55.38319962456869 C 6.816000000000001 55.38319962456869 0 60.89246578319098 0 67.68431242318563 C 0 74.49073384137772 6.816000000000001 80 15.200000000000001 80 C 23.600000000000005 80 30.400000000000002 74.49073384137772 30.400000000000002 67.68431242318563 C 30.400000000000002 67.20334474267099 30.368 66.73695184035377 30.304 66.25598415983913 C 30.368 66.110236377865 30.400000000000002 65.93533903949603 30.400000000000002 65.76044170112706 L 30.400000000000002 23.493584928628078 L 76.80000000000001 18.01346832640062 L 76.80000000000001 45.57437389770944 C 74.03200000000001 42.68856781462158 69.69600000000001 40.808421427155245 64.8 40.808421427155245 C 56.41600000000001 40.808421427155245 49.599999999999994 46.317687585777534 49.599999999999994 53.109534225772194 C 49.599999999999994 59.915955643964274 56.41600000000001 65.42522180258656 64.8 65.42522180258656 C 73.2 65.42522180258656 80 59.915955643964274 80 53.109534225772194 C 80 52.97836122199548 79.98400000000001 52.84718821821875 79.98400000000001 52.71601521444204 C 79.98400000000001 52.6868656580472 80 52.64314132345496 80 52.61399176706014 L 80 16.366518390092903 L 80 10.230536768981839 L 80 1.4565202941389452 C 80 1.0338517264139553 79.808 0.6403327150837924 79.45600000000002 0.36341192933293687 Z',
        },
      },
    },
  ],
};

export type CustomProperties = {
  // 形状属性
  width?: number;
  height?: number;
  radius?: number;

  // 文字位置属性
  refX?: number;
  refY?: number;

  // 样式属性
  style?: LogicFlow.CommonTheme;
  textStyle?: LogicFlow.TextNodeTheme;
};

class CustomIconNode extends RectNode {
  getCustomIcon = (): h.JSX.Element => {
    const { model } = this.props;
    const { x, y, width, height } = model;
    console.log('model.modelType', model.modelType);
    const style = model.getNodeStyle();

    // TODO: 目前没办法自适应 path 的大小，path 与 width、height 需要同步
    return h(
      'svg',
      {
        x: x - width / 2,
        y: y - height / 2,
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
      },
      [
        h('circle', {
          cx: '50%',
          cy: '50%',
          r: '50%',
          fill: 'white',
        }),
        h('path', {
          d: style.path,
          fill: style.fill,
          stroke: style.stroke,
          // d: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z',
          // d: 'M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z',
          // d: 'M690.366075 350.568358c0-98.876614-79.937349-179.048571-178.558027-179.048571-98.59935 0-178.515371 80.150629-178.515371 179.048571 0 98.833958 79.916021 178.963259 178.515371 178.963259C610.428726 529.531617 690.366075 449.380988 690.366075 350.568358M376.140632 350.568358c0-75.159877 60.72082-136.072649 135.667416-136.072649 74.989253 0 135.667416 60.912772 135.667416 136.072649 0 75.117221-60.678164 136.029993-135.667416 136.029993C436.861451 486.577022 376.140632 425.664251 376.140632 350.568358M197.284012 762.923936 197.284012 778.472049l15.526785 0 291.255186 0.127968L819.784387 778.472049l15.569441 0 0-15.548113c0-139.783721-136.413897-285.581938-311.026243-273.275681-10.002833 0.703824-24.740482 9.128385-34.658002 9.938849-8.573857 0.74648 13.692577 8.232609 14.396401 16.827793 9.021745-0.789136 6.313088 13.095393 15.505457 13.095393 150.597017 0 263.14488 103.07823 263.14488 224.62651l15.441473-15.590769-285.816546-0.042656-278.991585 1.81288 15.526785 15.612097c0-82.752645 75.095893-152.70849 136.861785-191.824044 7.25152-4.58552 8.659169-17.659585 4.862784-22.906273-6.846288-9.426977-19.877697-8.701825-28.046322-6.014496C285.262018 560.521203 197.284012 667.758394 197.284012 762.923936',
        }),
      ],
    );
  };

  getShape = (): h.JSX.Element => {
    const { model } = this.props;
    const { x, y, width, height, radius } = model;
    console.log('model.modelType', model.modelType);
    const style = model.getNodeStyle();

    return h('g', {}, [
      h('rect', {
        ...style,
        stroke: 'transparent',
        fill: 'transparent',
        x: x - width / 2,
        y: y - height / 2,
        rx: radius,
        ry: radius,
        width,
        height,
      }),
      this.getCustomIcon(),
    ]);
  };

  getText(): h.JSX.Element | null {
    return null;
  }
}

class CustomIconNodeModel extends RectNodeModel {
  setAttributes() {
    console.log('this.properties', this.properties);
    const { width, height, radius } = this.properties as CustomProperties;
    if (width) {
      this.width = width;
    }
    if (height) {
      this.height = height;
    }
    if (radius) {
      this.radius = radius;
    }
  }

  getTextStyle(): LogicFlow.TextNodeTheme {
    // const { x, y, width, height } = this
    const {
      refX = 0,
      refY = 0,
      textStyle,
    } = this.properties as CustomProperties;
    const style = super.getTextStyle();

    // 通过 transform 重新设置 text 的位置
    return {
      ...style,
      fill: 'red',
      ...(structuredClone(textStyle) || {}),
      transform: `matrix(1 0 0 1 ${refX} ${refY})`,
    };
  }

  getNodeStyle(): LogicFlow.CommonTheme {
    const style = super.getNodeStyle();
    const {
      style: customNodeStyle,
      // radius = 0, // 第二种方式，设置圆角
    } = this.properties as CustomProperties;

    return {
      ...style,
      ...(structuredClone(customNodeStyle) || {}),
      // rx: radius,
      // ry: radius,
    };
  }
}

const CustomIcon = {
  type: 'customIcon',
  view: CustomIconNode,
  model: CustomIconNodeModel,
};

const container = document.querySelector('#container');
const root = createRoot(container);

const App: React.FC = () => {
  const lfRef = useRef<LogicFlow>();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!lfRef.current) {
      const lf = new LogicFlow({
        ...config,
        container: containerRef.current as HTMLElement,
        // container: document.querySelector('#graph') as HTMLElement,
        grid: {
          size: 10,
        },
      });

      lf.register(CustomIcon);

      lf.render(data);
      lf.translateCenter();
      lfRef.current = lf;
    }
  }, []);

  return <div ref={containerRef} id="graph"></div>;
};

root.render(<App></App>);

insertCss(`
#graph{
  width: 100%;
  height: 100%;
}
`);
