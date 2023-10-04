import flet as ft
import time

GOLD = [(0, 273.60), ...]  # Define your data lists
BTC = [(9, 0.0008), ...]

class TimeChart(ft.UserControl):
    def __init__(self, data):
        self.data_points = [self.create_data_points(x, y) for x, y in data]
        self.chart = self.create_chart(data)
        super().__init__()

    def create_chart(self, data):
        min_x = min(data, key=lambda x: x[0])[0]
        max_x = max(data, key=lambda x: x[0])[0]
        min_y = min(data, key=lambda y: y[1])[1]
        max_y = max(data, key=lambda y: y[1])[1]

        chart = ft.LineChart(
            tooltip_bgcolor=ft.colors.with_opacity(0.8, ft.colors.WHITE),
            expand=True,
            min_x=min_x,
            max_x=max_x,
            min_y=int(min_y),
            max_y=int(max_y),
            left_axis=ft.ChartAxis(labels_size=50),
            bottom_axis=ft.ChartAxis(labels_size=40, labels_interval=1),
        )

        line_chart = ft.LineChartData(
            color=ft.colors.GREEN,
            stroke_width=2,
            curved=True,
            stroke_cap_round=True,
            below_line_gradient=ft.LinearGradient(
                begin=ft.alignment.top_center,
                end=ft.alignment.bottom_center,
                colors=[ft.colors.with_opacity(0.25, ft.colors.GREEN), "transparent"]
            ),
        )
        line_chart.data_points = self.data_points
        chart.data_series = [line_chart]
        return chart

    def create_data_points(self, x, y):
        return ft.LineChartDataPoint(
            x,
            y,
            selected_below_line=ft.ChartPointLine(width=0.5, color="white54", dash_pattern=[2, 4]),
            selected_point=ft.ChartCirclePoint(stroke_width=1),
        )

def main(page: ft.Page):
    page.horizontal_alignment = "center"
    page.vertical_alignment = "center"

    chart = TimeChart(GOLD)  # Initialize with the GOLD data
    page.add(
        ft.Column(
            expand=True,
            alignment="center",
            horizontal_alignment="center",
            controls=[
                ft.Container(
                    expand=1,
                    border_radius=6,
                    bgcolor=ft.colors.with_opacity(0.025, ft.colors.WHITE10),
                    content=ft.Row(alignment="center", controls=[
                        chart.get_data_buttons("Gold", GOLD),
                        chart.get_data_buttons("Bitcoin", BTC),
                    ]),
                ),
                ft.Container(
                    expand=4,
                    border_radius=6,
                    bgcolor=ft.colors.with_opacity(0.025, ft.colors.WHITE10),
                    content=chart,
                    padding=20,
                ),
            ]
        )
    )

    page.update()
    chart.get_data_points()

if __name__ == "__main__":
    ft.flet.app(target=main)

